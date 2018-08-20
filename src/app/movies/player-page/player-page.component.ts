import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Film} from "../film";
import {FilmsService} from "../films.service";
import {Subscription} from "rxjs/Subscription";
import {UserService} from "../../users/user.service";
import {Comment} from "../../users/comment";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  film: Film;
  filmID: number;
  comment: string = "";

  constructor(private activateRoute: ActivatedRoute, private filmsService: FilmsService, private userService: UserService) {
    this.filmID = activateRoute.snapshot.params['filmID'];

  }

  ngOnInit(){


    this.sub();



    let filmFilter: Film = new Film();
    filmFilter.id = this.filmID;
    filmFilter.year = 0;

    this.filmsService.setfilterFilm(filmFilter);
    this.filmsService.getFilms();
    filmFilter.id = 0;

  }

  sub(){
    this.subscription = this.filmsService.pageSubject.subscribe((msg)=>{
      let films: any = msg;
      this.film = films[0];


    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  Commenting() {
    this.userService.sendComment(this.comment, this.filmID);

    let newComment: Comment = new Comment(this.comment, "", this.filmID);
    newComment.comment = this.comment;
    newComment.date = Date.now().toString();
    newComment.name = this.userService.name;
    this.film.comments.unshift(newComment);
    this.comment = "";
    // this.subscription.unsubscribe();
    //
    //
    // this.subscription = this.filmsService.pageSubject.subscribe((msg)=>{
    //   let films: any = msg;
    //   this.film.comments = films[0].comments;
    //   console.log("comments" + this.film.comments);
    //   this.subscription.unsubscribe();
    //   this.sub();
    //
    // });
    //
    // this.filmsService.getFilms();

  }
}

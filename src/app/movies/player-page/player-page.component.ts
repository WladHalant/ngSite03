import {Component, Inject, Input, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Film} from "../film";
import {FilmsService} from "../films.service";
import {Subscription} from "rxjs/Subscription";
import {UserService} from "../../users/user.service";
import {Comment} from "../../users/comment";

import {Message} from "primeng/api";


@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  subscriptionCommentStatus: Subscription;
  film: Film;
  filmID: number;
  comment: string = "";
  msgs: Message[] = [];
  private newComment: Comment;

  constructor(private activateRoute: ActivatedRoute, private filmsService: FilmsService, private userService: UserService, @Inject(LOCALE_ID) private locale: string) {
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

    this.subscriptionCommentStatus = this.userService.commentStatus.subscribe((status)=> {
      // console.log("status:" + JSON.parse(status));
      console.log(status.status);

      if(status.status == 1){
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:'Не Удалось отправить комментарий, пожалуйста авторизируйтесь'});
      }else if (status.status ==0) this.film.comments.unshift(this.newComment);
    });
  }

  sub(){
    this.subscription = this.filmsService.pageSubject.subscribe((msg)=>{
      let films: any = msg; //C
      this.film = films[0];
      console.log("pat: " + this.film.path)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  Commenting() {
    this.userService.sendComment(this.comment, this.filmID);

    this.newComment = new Comment(this.comment, "", this.filmID);
    this.newComment.comment = this.comment;
    // let datePipe = new DatePipe('ru-RU');
    // let setDob = datePipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss');
    this.newComment.date = Date.now().toString()/*setDob*/;
    this.newComment.name = this.userService.name;

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

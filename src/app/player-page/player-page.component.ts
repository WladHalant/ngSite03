import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Film} from "../film";
import {FilmsService} from "../films.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  film: Film;
  filmID: number;

  constructor(private activateRoute: ActivatedRoute, private filmsService: FilmsService) {
    this.filmID = activateRoute.snapshot.params['filmID'];

  }



  ngOnInit(){


    this.subscription = this.filmsService.wsSubject.subscribe((msg)=>{
      let films: any = msg;
      this.film = films[0];

    });

    let filmFilter: Film = new Film();
    filmFilter.id = this.filmID;
    filmFilter.year = 0;
    this.filmsService.wsSubject.next(JSON.stringify(filmFilter));

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

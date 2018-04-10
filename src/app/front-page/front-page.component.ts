import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmsService} from "../films.service";
import {Subscription} from "rxjs/Subscription";
import {Film} from "../film";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  films: any;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(){
    this.subscription = this.filmsService.subject2.subscribe((msg)=>{this.films = msg})

    let filmFilter: Film = new Film();
    filmFilter.id = 0;
    filmFilter.year = 0;
    this.filmsService.subject.next(JSON.stringify(filmFilter));

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

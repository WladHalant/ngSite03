import { Component } from '@angular/core';
import {FilmsService} from './films.service';
import {Film} from "./film";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilmsService]
})
export class AppComponent {

  films: Film[] = [];

  constructor(private filmsService: FilmsService){}

  ngOnInit(){
    this.films = this.filmsService.getFilms();

  }

  sendMsg() {
    this.filmsService.subject.next(JSON.stringify({ op: 'hello' }));

  }
}

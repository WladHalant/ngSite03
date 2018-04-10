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


  constructor(private filmsService: FilmsService){}

  getFilmsForYear(event){
    console.log("Clicked: " + event.textContent);

    let filmFilter: Film = new Film();
    filmFilter.id = 0;
    filmFilter.year = Number(event.textContent);
    this.filmsService.subject.next(JSON.stringify(filmFilter));
  }

}

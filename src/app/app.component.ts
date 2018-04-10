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

  year: any = "Год";

  constructor(private filmsService: FilmsService){}

  getFilmsForYear(event){
    let filmFilter: Film = new Film();

    if(event.textContent != "Все") {

      this.year = event.textContent;
      filmFilter.id = 0;
      filmFilter.year = Number(this.year);
      this.filmsService.subject.next(JSON.stringify(filmFilter));

    }else {

      this.year = "Год";
      filmFilter.id = 0;
      filmFilter.year = 0;
      this.filmsService.subject.next(JSON.stringify(filmFilter));

    }
  }

}

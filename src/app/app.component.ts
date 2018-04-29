import {Component, OnInit} from '@angular/core';
import {FilmsService} from './films.service';
import {Film} from "./film";
import {Subscription} from "rxjs/Subscription";
import {Lists} from "./Lists";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilmsService]
})
export class AppComponent implements OnInit{
  private subscription: Subscription;
  genres: any;
  year: any = "Год";
  years: any;
  countries: any;
  country: any = "Страна";

  constructor(private filmsService: FilmsService){}

  ngOnInit(): void {
    this.subscription = this.filmsService.listsSubject.subscribe((msg)=>{
      let lists: Lists =  msg;
      this.genres = lists.jsonAllGenres;
      this.years = lists.years;
      this.countries = lists.countries;
    });
  }

  public searchGenre(event, genre) {
    let filterFilm: Film = new Film();
    filterFilm.genres = [genre];
    this.filmsService.getFilms(filterFilm);
  }

  getFilmsForYear(event){
    let filmFilter: Film = new Film();

    if(event.textContent != "Все") {

      this.year = event.textContent;
      filmFilter.year = Number(this.year);
      this.filmsService.getFilms(filmFilter);

    }else {

      this.year = "Год";
      this.filmsService.getFilms(filmFilter);

    }
  }

  getFilmsForCountry(event) {
    let filmFilter: Film = new Film();

    if(event.textContent != "Все") {

      this.country = event.textContent;
      filmFilter.countries = [event.textContent];
      this.filmsService.getFilms(filmFilter);

    }else {

      this.country = "Страна";
      this.filmsService.getFilms(filmFilter);

    }
  }
}

import {Component, OnInit} from '@angular/core';
import {FilmsService} from './movies/films.service';
import {Film} from "./movies/film";
import {Subscription} from "rxjs/Subscription";
import {Lists} from "./movies/Lists";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "./users/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilmsService, UserService]
})
export class AppComponent implements OnInit{
  private subscription: Subscription;
  genres: any;
  year: any = "Год";
  years: any;
  countries: any;
  country: any = "Страна";

  constructor(private filmsService: FilmsService, private  userService: UserService, private router: Router, private route: ActivatedRoute){}

  goTo(location: string): void {
    window.location.hash = location;
  }

  ngOnInit(): void {

    this.subscription = this.filmsService.listsSubject.subscribe((msg)=>{
      let lists: Lists =  msg;
      this.genres = lists.jsonAllGenres;
      this.years = lists.years;
      this.countries = lists.countries;
    });
  }

  public searchGenre(event, genre) {
    this.router.navigate([``], { relativeTo: this.route });
    let filterFilm: Film = this.filmsService.filterFilm;
    filterFilm.genres = [genre];
    // this.filmsService.setfilterFilm(filterFilm);
    this.filmsService.getFilms();
  }

  getFilmsForYear(event){
    this.router.navigate([``], { relativeTo: this.route });
    let filmFilter: Film  = this.filmsService.filterFilm;

    if(event.textContent != "Все") {

      this.year = event.textContent;
      filmFilter.year = Number(this.year);
      // this.filmsService.setfilterFilm(filmFilter);
      this.filmsService.getFilms();

    }else {

      this.year = "Год";
      // this.filmsService.setfilterFilm(filmFilter);
      filmFilter.year = 0;
      this.filmsService.getFilms();

    }
  }

  getFilmsForCountry(event) {
    this.router.navigate([``], { relativeTo: this.route });
    let filmFilter: Film  = this.filmsService.filterFilm;

    if(event.textContent != "Все") {

      this.country = event.textContent;
      filmFilter.countries = [event.textContent];
      // this.filmsService.setfilterFilm(filmFilter);
      this.filmsService.getFilms();

    }else {

      this.country = "Страна";
      filmFilter.countries = [""];
      // this.filmsService.setfilterFilm(filmFilter);
      this.filmsService.getFilms();

    }
  }
}

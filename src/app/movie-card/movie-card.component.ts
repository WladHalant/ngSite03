import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../film";
import {IFilm} from "../i-film";
import {FilmsService} from "../films.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  // name: String;
  @Input() film: Film;
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    console.log("genres: " + this.film.actors.toString());
  }

  public searchGenre(event, genre) {
    let filterFilm: Film = new Film();
    filterFilm.genres = [genre];
    this.filmsService.getFilms(filterFilm);
  }

  searchCountry($event, country: string) {
    let filterFilm: Film = new Film();
    filterFilm.countries = [country];
    this.filmsService.getFilms(filterFilm);
  }

  searchActor($event, actor: string) {
    let filterFilm: Film = new Film();
    filterFilm.actors = [actor];
    console.log("актер" + actor);
    this.filmsService.getFilms(filterFilm);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../film";
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

  }

  public searchGenre(event, genre) {
    let filterFilm: Film = new Film();
    filterFilm.genres = [genre];
    this.filmsService.setfilterFilm(filterFilm);
    this.filmsService.getFilms();
  }

  searchCountry($event, country: string) {
    let filterFilm: Film = new Film();
    filterFilm.countries = [country];
    this.filmsService.setfilterFilm(filterFilm);
    this.filmsService.getFilms();
  }

  searchActor($event, actor: string) {
    let filterFilm: Film = new Film();
    filterFilm.actors = [actor];

    this.filmsService.setfilterFilm(filterFilm);
    this.filmsService.getFilms();
  }
}

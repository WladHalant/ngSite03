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
  @Input() film: IFilm;
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    // let serverNames = JSON.parse(this.film.name);
    //
    // this.name = serverNames[0] + " / " + serverNames[1];
    console.log("genres: " + this.film.genres.toString());
  }
  public searchGenre(event, genre) {
    let filterFilm: Film = new Film();
    filterFilm.genres = [genre];
    this.filmsService.getFilms(filterFilm);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../film";
import {IFilm} from "../i-film";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  name: String;
  @Input() film: IFilm;
  constructor() { }

  ngOnInit() {
    let serverNames = JSON.parse(this.film.name);

    this.name = serverNames[0] + " / " + serverNames[1];
  }

}

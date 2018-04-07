import {Component, Input, OnInit} from '@angular/core';
import {IFilm} from "../i-film";

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {

  constructor() { }
  @Input() film: IFilm;
  name: String;

  ngOnInit() {
    let serverNames = JSON.parse(this.film.name);

    this.name = serverNames[1];
  }

}

import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Film} from "../film";
import {FilmsService} from "../films.service";

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private filmsService: FilmsService) {
    this.filmName = activateRoute.snapshot.params['filmName'];

  }
  name: String;
  filmName: string;
  film: Film;

  ngOnInit() {

    console.log("filmName" + this.filmName)
  }

}

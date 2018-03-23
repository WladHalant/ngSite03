import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../film";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() film: Film;
  constructor() { }

  ngOnInit() {

  }

}

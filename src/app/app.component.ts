import { Component } from '@angular/core';
import {FilmsService} from './films.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilmsService]
})
export class AppComponent {
  title = 'app';

  films = [];

  constructor(private filmsService: FilmsService){}

  ngOnInit(){
    this.films = this.filmsService.getFilms();
  }
}

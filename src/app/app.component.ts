import { Component } from '@angular/core';
import {FilmsService} from './films.service';
import {WebSocketService} from "./websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilmsService, WebSocketService]
})
export class AppComponent {
  title = 'app';

  films = [];

  constructor(private filmsService: FilmsService){}

  ngOnInit(){
    this.filmsService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });

    this.films = this.filmsService.getFilms();
    this.sendMsg();
  }

  sendMsg() {
    this.filmsService.messages.next("Hello from Angular!!! NEW :)");
  }
}

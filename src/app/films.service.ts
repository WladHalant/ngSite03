import { Injectable } from '@angular/core';
import { WebSocketService } from './websocket.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class FilmsService {

  CHAT_URL = "ws://localhost:8080/MovieServer/ws";
  films =
    [
      {name_film: 'Film 1'},
      {name_film: 'Film 2'},
      {name_film: 'Film 3'},
      {name_film: 'Film 4'},
      {name_film: 'Film 5'},

    ];

  getFilms(){
    return this.films
  }

  public messages: Subject<String>;

  constructor(wsService: WebSocketService) {
    this.messages = <Subject<String>>wsService
      .connect(this.CHAT_URL)
      .map((response: MessageEvent): String => {
        return response.data;
      });
  }

}


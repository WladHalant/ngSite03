import { Injectable } from '@angular/core';
import { WebSocketService } from './websocket.service';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {WebSocketSubject} from "rxjs/observable/dom/WebSocketSubject";

@Injectable()
export class FilmsService {

  URL = "ws://localhost:8080/MovieServer/ws";
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
  public subject: WebSocketSubject<Object>;

  constructor(wsService: WebSocketService) {
    // this.messages = <Subject<String>>wsService
    //   .connect(this.URL)
    //   .map((response: MessageEvent): String => {
    //     return response.data;
    //   });

    this.subject = Observable.webSocket(this.URL);
    this.subject.subscribe(
      (msg) => console.log('message received: ' + msg),
      (err) => console.log(err),
      () => console.log('complete')
    );
    this.subject.next(JSON.stringify({ op: 'hello' }));
  }

}


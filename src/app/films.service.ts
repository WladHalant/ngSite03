import { Injectable } from '@angular/core';
import { WebSocketService } from './websocket.service';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {WebSocketSubject} from "rxjs/observable/dom/WebSocketSubject";

@Injectable()
export class FilmsService {

  URL = "ws://localhost:8080/MovieServer/ws";
  films: Film[] =[];

  getFilms(){
    return this.films
  }

  public messages: Subject<String>;
  public subject: WebSocketSubject<Object>;

  constructor() {

    this.subject = Observable.webSocket(this.URL);
    this.subject.subscribe(
      (msg) => console.log('message received: ' + msg),
      (err) => console.log(err),
      () => console.log('complete')
    );
    this.subject.next(JSON.stringify({ op: 'hello' }));
  }

}


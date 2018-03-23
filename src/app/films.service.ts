import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {WebSocketSubject} from "rxjs/observable/dom/WebSocketSubject";
import "rxjs/add/observable/dom/webSocket";
import {Film} from "./film";


@Injectable()
export class FilmsService {

  URL = "ws://localhost:8080/MovieServer/ws";
  films: Film[] = [];

  getFilms(){
    let film = new Film();
    film.name = "awd";
    this.films.push(film);
    return this.films
  }


  public subject: WebSocketSubject<Object>;

  constructor() {

    this.subject = Observable.webSocket(this.URL);
    this.subject.subscribe(
      (msg) => this.parseAnswer(msg),
      (err) => console.log(err),
      () => console.log('complete')
    );
    this.subject.next(JSON.stringify({ op: 'hello' }));
  }

  parseAnswer(msg){
    // this.films=msg;
    console.log(msg);
  }
}


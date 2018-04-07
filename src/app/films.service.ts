import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {WebSocketSubject} from "rxjs/observable/dom/WebSocketSubject";
import "rxjs/add/observable/dom/webSocket";
import {Film} from "./film";
import {Subject} from "rxjs/Subject";


@Injectable()
export class FilmsService {
  URL = "ws://astrgan.asuscomm.com:8086/MovieServer/ws";
  films: Film[];

  // getFilms(){
  //   let film = new Film();
  //   film.name = "awd";
  //   this.films.push(film);
  //   return this.films
  // }


  public subject: WebSocketSubject<Object>;
  public subject2: Subject<any>;

  constructor() {
    this.subject2 = new Subject();
    this.subject = Observable.webSocket(this.URL);
    this.subject.subscribe(
      (msg) => this.parseAnswer(msg),
      (err) => console.log(err),
      () => console.log('complete')
    );
    this.subject.next(JSON.stringify({ op: 'hello' }));
  }

  parseAnswer(msg){
    this.films=msg;
    this.subject2.next(this.films.slice(0, 3));
    // console.log(msg);
  }
}


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
  public pages: number;
  public currentPage: number;
  private numSelector: number = 3;

  constructor() {
    this.pages = 0;
    this.currentPage = 0;
    this.subject2 = new Subject();
    this.subject = Observable.webSocket(this.URL);
    this.subject.subscribe(
      (msg) => this.parseAnswer(msg),
      (err) => console.log(err),
      () => console.log('complete')
    );


  }

  parseAnswer(msg){
    console.log("parseAnswer");
    this.films=msg;
    this.pages = Math.ceil(this.films.length/this.numSelector);
    this.subject2.next(this.films.slice(this.currentPage, this.numSelector));
    // console.log(msg);
  }

  goPage(number: number){
    this.subject2.next(this.films.slice(((number-1) * this.numSelector), ((number-1)*3)+(this.numSelector) ));

    this.currentPage = number -1;
  }
}


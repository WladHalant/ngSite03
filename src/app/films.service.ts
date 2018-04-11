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

  public wsSubject: WebSocketSubject<Object>;
  public pageSubject: Subject<any>;
  public pages: number;
  public currentPage: number;
  private numSelector: number = 3;


  constructor() {


    this.pages = 0;
    this.currentPage = 0;
    this.pageSubject = new Subject();
    this.wsSubject = Observable.webSocket(this.URL);
    this.wsSubject.subscribe(
      (msg) => this.parseAnswer(msg),
      (err) => console.log(err),
      () => console.log('complete')
    );


  }

  parseAnswer(msg){
    this.pages = 0;
    this.currentPage = 0;
    this.films=msg;
    this.pages = Math.ceil(this.films.length/this.numSelector);
    this.pageSubject.next(this.films.slice(this.currentPage, this.numSelector));
    // console.log(msg);
  }

  goPage(number: number){
    this.pageSubject.next(this.films.slice(((number-1) * this.numSelector), ((number-1)*3)+(this.numSelector) ));

    this.currentPage = number -1;
  }
}


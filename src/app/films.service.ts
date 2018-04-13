import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {WebSocketSubject} from "rxjs/observable/dom/WebSocketSubject";
import "rxjs/add/observable/dom/webSocket";
import {Film} from "./film";
import {Subject} from "rxjs/Subject";
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable()
export class FilmsService {
  // URL = "ws://astrgan.asuscomm.com:8086/MovieServer/ws";
  URL = "ws://localhost:8080/MovieServer/ws";
  films: Film[];

  public wsSubject: WebSocketSubject<Object>;
  public pageSubject: Subject<any>;
  public pages: number;
  public currentPage: number;
  private numSelector: number = 3;
  public listSubject: Subject<any>;


  constructor(private http: HttpClient) {

    this.pages = 0;
    this.currentPage = 0;
    this.pageSubject = new Subject();
    this.listSubject = new Subject();


    this.wsSubject = Observable.webSocket(this.URL);
    this.wsSubject.subscribe(
      (msg) => this.parseAnswer(msg),
      (err) => console.log(err),
      () => console.log('complete')
    );
  }

  getListFilms(){
    this.http.get("http://localhost:8080/MovieServer/rest/films").subscribe(
      (data:any[])=> {
        this.listSubject.next(data);
      }
    )
  }


  getFilms(filterFilm: Film) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post("http://localhost:8080/MovieServer/rest/films", JSON.stringify(filterFilm), httpOptions).subscribe(
      (data: any[]) => {
        console.log("POST RESPONSE: " + data);

      }
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


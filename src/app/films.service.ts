import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {WebSocketSubject} from "rxjs/observable/dom/WebSocketSubject";
import "rxjs/add/observable/dom/webSocket";
import {Film} from "./film";
import {Subject} from "rxjs/Subject";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Lists} from "./Lists";



@Injectable()
export class FilmsService {
  URL = "http://93.170.123.54/MovieServer/rest/films";
  //URL = "http://astrgan.asuscomm.com:8086/MovieServer/rest/films";
  //URL = "http://localhost:8080/MovieServer/rest/films";
  films: Film[];

  public pageSubject: Subject<any>;
  public pages: number;
  public currentPage: number;
  private numSelector: number = 3;
  public listFilmsSubject: Subject<any>;
  public listsSubject: Subject<any>;
  public filterFilm: Film;
  public lists: Lists;

  constructor(private http: HttpClient) {

    this.filterFilm = new Film();
    this.pages = 0;
    this.currentPage = 0;
    this.pageSubject = new Subject();
    this.listFilmsSubject = new Subject();
    this.listsSubject = new Subject();
    this.getListGenres();
  }

  setfilterFilm(filterFilm: Film){
    this.filterFilm = filterFilm;
  }

  getListGenres(){
    this.http.get(this.URL).subscribe(
      (data:any[])=> {
        this.listsSubject.next(data)
      }
    )
  }


  getFilms() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post(this.URL, JSON.stringify(this.filterFilm), httpOptions).subscribe(
      (data: any[]) => {
        this.parseAnswer(data);

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


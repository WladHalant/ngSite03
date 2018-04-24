import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {WebSocketSubject} from "rxjs/observable/dom/WebSocketSubject";
import "rxjs/add/observable/dom/webSocket";
import {Film} from "./film";
import {Subject} from "rxjs/Subject";
import {HttpClient, HttpHeaders} from '@angular/common/http';



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
  public listGenresSubject: Subject<any>;


  constructor(private http: HttpClient) {

    this.pages = 0;
    this.currentPage = 0;
    this.pageSubject = new Subject();
    this.listFilmsSubject = new Subject();
    this.listGenresSubject = new Subject();

  }

  getListFilms(){
    this.http.get(this.URL + "/getfilmslist").subscribe(
      (data:any[])=> {
        this.listFilmsSubject.next(data);
      }
    )
  }

  getListGenres(){
    this.http.get(this.URL).subscribe(
      (data:any[])=> {
        this.listGenresSubject.next(data);
      }
    )
  }


  getFilms(filterFilm: Film) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post(this.URL, JSON.stringify(filterFilm), httpOptions).subscribe(
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


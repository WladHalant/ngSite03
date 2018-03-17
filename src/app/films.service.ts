import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class FilmsService {

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

  public connect(url): Rx.Subject<MessageEvent>{
    if(!this.subject){
      this.subject = this.create(url);
      console.log("Successfully Connect:" + url);
    }
  }
  constructor() { }

}

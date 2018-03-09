import { Injectable } from '@angular/core';

@Injectable()
export class FilmsService {

  films =
    [
      {name: 'WFM 1'},
      {name: 'WFM 2'},
      {name: 'WFM 3'},
      {name: 'WFM 4'},
      {name: 'WFM 5'},

    ];

  getFilms(){
    return this.films
  }
  constructor() { }

}

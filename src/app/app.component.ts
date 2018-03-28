import { Component } from '@angular/core';
import {FilmsService} from './films.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilmsService]
})
export class AppComponent {


  constructor(){}

  // sendMsg() {
  //   this.filmsService.subject.next(JSON.stringify({ op: 'hello' }));
  //
  // }


}

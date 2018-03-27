import { Component } from '@angular/core';
import {FilmsService} from './films.service';
import {Film} from "./film";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilmsService]
})
export class AppComponent {

  subscription: Subscription;
  films: any;

  constructor(private filmsService: FilmsService){}

  ngOnInit(){
    this.subscription = this.filmsService.subject.subscribe((msg)=>{this.films = msg})

  }

  sendMsg() {
    this.filmsService.subject.next(JSON.stringify({ op: 'hello' }));

  }
}

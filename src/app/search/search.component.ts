import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../films.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

 //brands: string[] = ['huy','Marrowbone','Jumanji: Welcome to the Jungle','Anthropoid','Kill\'em All','Wonder','Jaguar','Devil\'s Gate','Murder on the Orient Express','Passengers','La consolation', 'American Made'];
  filteredBrands: any[];
  brands: string[];

  brand: string;
  subscription: Subscription;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {

        //this.subscription = this.filmsService.wsSubject.subscribe((msg)=>{this.brands = msg});

          let obj = {
            "command":"arrayAllNamesFilms"
        };
        this.filmsService.wsSubject.next(JSON.stringify(obj));


  }

  filterBrands(event) {
    this.filteredBrands = [];
    for(let i = 0; i < this.brands.length; i++) {
      let brand = this.brands[i];
      if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredBrands.push(brand);
      }
    }
  }

}

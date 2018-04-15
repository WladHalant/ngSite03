import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmsService} from "../films.service";
import {Subscription} from "rxjs/Subscription";
import {Film} from "../film";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  brands: string[];
  filteredBrands: any[];


  brand: string;
  subscription: Subscription;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getListFilms();
    this.subscription = this.filmsService.listSubject.subscribe((msg)=>{
        this.brands = msg;
    })

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

  sendMsg() {

    let filterFilm: Film = new Film();
    filterFilm.id = 0;
    filterFilm.year = 0;
    filterFilm.name = this.brand;
    console.log("Name film:" + filterFilm.name);
    this.filmsService.getFilms(filterFilm);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

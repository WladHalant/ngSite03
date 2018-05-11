import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmsService} from "../films.service";
import {Subscription} from "rxjs/Subscription";
import {Film} from "../film";
import {Lists} from "../Lists";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private filmsService: FilmsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.filmsService.listsSubject.subscribe((msg)=>{
      let lists: Lists =  msg;
      this.brands = lists.jsonAllFilms;
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
    this.router.navigate([``], { relativeTo: this.route });
    let filterFilm: Film = new Film();
    filterFilm.id = 0;
    filterFilm.year = 0;
    filterFilm.name = this.brand;
    console.log("Name film:" + filterFilm.name);
    this.filmsService.setfilterFilm(filterFilm);
    this.filmsService.getFilms();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

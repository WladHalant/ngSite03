import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  brands: string[] = ['Marrowbone','Jumanji: Welcome to the Jungle','Anthropoid','Kill\'em All','Wonder','Jaguar','Devil\'s Gate','Murder on the Orient Express','Passengers','La consolation', 'American Made'];
  filteredBrands: any[];

  brand: string;

  constructor() { }

  ngOnInit() {

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

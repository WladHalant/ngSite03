import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmsService} from "../films.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {

  numbers:number[];
  private subscription: Subscription;
  public currentPage: number;

  constructor(private filmsService: FilmsService) { }



  ngOnInit(){
    this.subscription = this.filmsService.subject2.subscribe((msg)=>{
      this.numbers = Array.from({ length: this.filmsService.pages }, (v, k) => k+1);

      this.currentPage = this.filmsService.currentPage;
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public pageClick(event, page) {
    console.log('Open: ' + page);

    this.filmsService.goPage(page);
    this.currentPage = this.filmsService.currentPage;
  }

}

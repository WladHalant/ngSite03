import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmsService} from '../films.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {

  numbersActive: number[];
  maxPage: number;
  private subscription: Subscription;
  public currentPage: number;
  private numbers: Array<number>;

  constructor(private filmsService: FilmsService) { }



  ngOnInit() {

    this.subscription = this.filmsService.pageSubject.subscribe((msg) => {
      this.maxPage = this.filmsService.pages;
      this.numbers = Array.from({ length: this.filmsService.pages }, (v, k) => k + 1);
      // this.numbersActive = Array.from({ length: this.filmsService.pages > 10 ? 10 : this.filmsService.pages }, (v, k) => k + 1);
      this.numbersActive = this.numbers.splice(0, 10);
      this.currentPage = this.filmsService.currentPage;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public pageClick(event, page) {
    console.log('Open: ' + page);
    window.scrollTo(0, 500);
    this.filmsService.goPage(page);
    this.currentPage = this.filmsService.currentPage;

  }

}

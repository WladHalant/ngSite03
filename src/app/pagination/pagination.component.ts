import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  numbers:number[] = [1,2,3,4]

  constructor() { }

  ngOnInit() {
  }

}

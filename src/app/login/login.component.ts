import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = "sdsd@sad.com";
  pass: string;

  constructor() { }

  ngOnInit() {
  }

  logining() {

    console.log("Name: " + this.name);
  }
}

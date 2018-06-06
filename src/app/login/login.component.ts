import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = "sdsd@sad.com";
  pass: string;

  public edited = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  authorization() {

    this.userService.authorization(this.name, this.pass, null,  "/auth");

    this.edited = true;


  }
}

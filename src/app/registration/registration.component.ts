import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name: string = "sdsd@sad.com";
  pass: string;
  rePass: string;
  email: string;
  message: string;
  public edited = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  registration() {

    if(this.pass === this.rePass)
      this.userService.authorization(this.name, this.pass, this.email, "/add");
    else{
      this.message = "Пароли не совпадают";
      this.edited=true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public name: string = '';
  public pass: string = '';
  public rePass: string = '';
  public email: string = '';
  message: string;
  edited: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  send() {
    console.log('send profile');
    if (this.pass === this.rePass) {

      if (this.name  === '') this.name  =  this.userService.name;
      if (this.pass  === undefined) this.pass  =  "";
      if (this.email === undefined) this.email =  "";

      console.log("name:" + this.name);
      console.log("email:" + this.email);
      console.log("pass:" + this.pass);
      console.log("rePass" + this.rePass);

      this.userService.authorization(this.name, this.pass, this.email, '/update', this.userService.token);
    } else {
        this.message = 'Пароли не совпадают';
        this.edited = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name: string;
  pass: string;
  rePass: string;
  email: string;
  message: string;
  edited: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  send() {
    console.log('send profile');
    if (this.pass === this.rePass) {
      this.userService.authorization(this.name, this.pass, this.email, '/update', this.userService.token);
    } else {
      this.message = 'Пароли не совпадают';
      this.edited = true;
    }
  }
}

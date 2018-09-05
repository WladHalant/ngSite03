import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Subscription} from 'rxjs/Subscription';
import {MyUrl} from '../../my-url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email = 'sdsd@sad.com';
  pass = 'toor';

  public edited = false;
  subscription: Subscription;
  message: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    window.location.hash = 'outlet';
    this.subscription = this.userService.messageSubject.subscribe((msg) => {
      console.log('status: ' + msg.status);
      if (msg.status != 0) {
        this.message = msg.message;
        this.edited = true;
      } else {
        localStorage.setItem('token', msg.token);

        const url = new URL(MyUrl.URL);
        window.location.assign("/");


      }
    });
  }

  authorization() {

    this.userService.authorization(null, this.pass, this.email,  '/auth', '');

    this.edited = true;


  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

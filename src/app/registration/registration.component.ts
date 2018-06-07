import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  name: string;
  pass: string;
  rePass: string;
  email: string;
  message: string;
  public edited = false;
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.messageSubject.subscribe((msg)=>{
      this.message = msg.status;
      this.edited=true;

     // window.location.reload();
    })

  }

  registration() {

    if(this.pass === this.rePass)
      this.userService.authorization(this.name, this.pass, this.email, "/add");
    else{
      this.message = "Пароли не совпадают";
      this.edited=true;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

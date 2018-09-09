import {Component, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, OnInit, OnDestroy} from '@angular/core';
import {UnauthPanelComponent} from '../unauth-panel/unauth-panel.component';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '../user.service';
import {AuthPanelComponent} from '../auth-panel/auth-panel.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-container-panel-auth',
  templateUrl: './container-panel-auth.component.html',
  entryComponents: [ UnauthPanelComponent, AuthPanelComponent ],
  styleUrls: ['./container-panel-auth.component.scss']
})
export class ContainerPanelAuthComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  text_1: string;
  text_2: string;
  statusAuth = 0;
  name: any;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.subscription = this.userService.authSubject.subscribe((msg) => {
      this.statusAuth = this.userService.statusAuth;
      if (this.userService.statusAuth === 0) { this.unAuth(); } else { this.auth(); }
    });
  }

  unAuth() {
    this.text_1 = 'Вход';
    this.text_2 = 'Регистрация';
  }

  auth() {
    this.name = this.userService.name;
    this.text_1 = this.name;
    this.text_2 = 'Выход';
    console.log("name: " + this.name);
  }

  clickText1() {
    if (this.statusAuth === 0) {
      this.router.navigate([`login`], { relativeTo: this.route });
    } else {

    }
  }

  clickText2() {
    if (this.statusAuth === 0) {
      this.router.navigate([`registration`], { relativeTo: this.route });
    } else {
      this.userService.logout();
      window.location.reload();
    }
  }
  ngOnDestroy(): void {

  }

}

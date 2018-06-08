import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss']
})
export class AuthPanelComponent implements OnInit {
  public name: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.name = this.userService.name;
  }

  logout() {
    this.userService.logout();
    window.location.reload();
  }
}

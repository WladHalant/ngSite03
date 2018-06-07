import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-unauth-panel',
  templateUrl: './unauth-panel.component.html',
  styleUrls: ['./unauth-panel.component.scss']
})
export class UnauthPanelComponent implements OnInit {
  name: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.name = this.userService.name;
  }

}

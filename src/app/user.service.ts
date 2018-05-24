import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService{

  constructor(private http: HttpClient) { }

  login(login: string, pass: string){

  }

  sendComment(comment: string){

  }



}

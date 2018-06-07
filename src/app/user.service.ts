import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Subject} from "rxjs/Subject";

@Injectable()
export class UserService{

  //URL = "http://93.170.123.54/MovieServer/rest/users";
  //URL = "http://astrgan.asuscomm.com:8086/MovieServer/rest/users";
  URL = "http://localhost:8080/MovieServer/rest/users";

  token: string;
  public messageSubject: Subject<any>;

  constructor(private http: HttpClient) {
    this.messageSubject = new Subject();
    this.token = localStorage.getItem('token');
    console.log(this.token);

    let body = new HttpParams();
    body = body.set('password', this.token);
    this.http.post(this.URL + "/chekToken", body).subscribe(
      (response: any) => {

        if (response.status != 0){

        }else {
          console.log("User name: " + response.name);
        }

      }
    );
  }

  sendComment(comment: string){

  }

  authorization(USERNAME: string, PASSWORD: string, EMAIL: string, command: string) {


    let body = new HttpParams();
    body = body.set('username', USERNAME);
    body = body.set('password', PASSWORD);
    body = body.set('email',    EMAIL);

    this.http.post(this.URL + command, body).subscribe(
      (response: any) => {
        this.parseAnswer(response);

      }
    );
  }



  parseAnswer(data: any) {
    console.log(data);
    this.messageSubject.next(data);
  }
}

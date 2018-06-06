import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class UserService{

  //URL = "http://93.170.123.54/MovieServer/rest/users";
  //URL = "http://astrgan.asuscomm.com:8086/MovieServer/rest/users";
  URL = "http://localhost:8080/MovieServer/rest/users";

  private token: string;

  constructor(private http: HttpClient) { }

  sendComment(comment: string){

  }

  authorization(USERNAME: string, PASSWORD: string, EMAIL: string, command: string) {


    let body = new HttpParams();
    body = body.set('username', USERNAME);
    body = body.set('password', PASSWORD);
    body = body.set('email',    EMAIL);

    this.http.post(this.URL+ command, body).subscribe(
      (response: any) => {
        this.parseAnswer(response.status);

      }
    );
  }



  parseAnswer(data: any) {
    console.log(data);
  }
}

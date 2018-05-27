import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class UserService{

  //URL = "http://93.170.123.54/MovieServer/rest/users";
  //URL = "http://astrgan.asuscomm.com:8086/MovieServer/rest/users";
  URL = "http://localhost:8080/MovieServer/rest/users";

  constructor(private http: HttpClient) { }

  login(login: string, pass: string){

  }

  sendComment(comment: string){

  }

  authorization(USERNAME: string, PASSWORD: string) {


    let body = new HttpParams();
    body = body.set('username', USERNAME);
    body = body.set('password', PASSWORD);

    this.http.post(this.URL+ "/auth", body).subscribe(
      (data: any[]) => {
        this.parseAnswer(data);

      }
    );
  }


  parseAnswer(data: any[]) {
    console.log(data);
  }
}

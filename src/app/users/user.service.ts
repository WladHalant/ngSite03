import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Comment} from './comment';
import {MyUrl} from '../my-url';

@Injectable()
export class UserService {

  URL = MyUrl.URL + '/users';
  // URL = "http://astrgan.asuscomm.com:8086/MovieServer/rest/users";
  // URL = "http://localhost:8080/MovieServer/rest/users";

  token: string;
  public messageSubject: Subject<any>;
  public authSubject: Subject<any>;
  public name: string;
  public statusAuth = 0;
  public commentStatus: Subject<any>;

  constructor(private http: HttpClient) {
    this.messageSubject = new Subject();
    this.authSubject = new Subject();
    this.commentStatus = new Subject();
    this.token = localStorage.getItem('token');
    console.log(this.token);

    let body = new HttpParams();
    body = body.set('password', this.token);
    this.http.post(this.URL + '/chekToken', body).subscribe(
      (response: any) => {

        if (response.status !== 0) {
          this.statusAuth = 0;
          this.authSubject.next();
        } else {
          this.name = response.name;
          console.log('User name: ' + this.name);
          this.statusAuth = 1;
          this.authSubject.next(this.name);

        }

      }
    );

  }

  authorization(USERNAME: string, PASSWORD: string, EMAIL: string, command: string, TOKEN: string) {


    let body = new HttpParams();
    body = body.set('username', USERNAME);
    body = body.set('password', PASSWORD);
    body = body.set('email',    EMAIL);
    body = body.set('token',    TOKEN);

    this.http.post(this.URL + command, body).subscribe(
      (response: any) => {
        this.parseAnswer(response);

      }
    );
  }

  sendComment(comment: string, id_film: number) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const commentJSON: Comment = new Comment(comment, this.token, id_film);

    this.http.post(MyUrl.URL + '/comment', JSON.stringify(commentJSON), httpOptions).subscribe(
      (data: any[]) => {

        console.log(data);
        this.commentStatus.next(data);

      }
    );
  }



  parseAnswer(data: any) {
    console.log(data);
    this.messageSubject.next(data);
  }

  logout() {

    let body = new HttpParams();
    body = body.set('password', this.token);
    this.http.post(this.URL + '/logout', body).subscribe(
      () => {}
    );

    localStorage.removeItem('token');

  }
}

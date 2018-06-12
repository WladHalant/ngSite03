export class Comment {

  public comment: string;
  public token: string;
  public id_film: number;

  public date: string;
  public name: string;

  constructor (comment: string, token: string, id_film: number){
    this.comment = comment;
    this.token = token;
    this.id_film = id_film;
  }
}

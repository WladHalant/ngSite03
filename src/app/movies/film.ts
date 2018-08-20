export class Film {
  public id: number = 0;
  public name: string = "";
  public rating:number;
  public description: string;
  public poster: string;
  public year: number = 0;
  public path: string;
  public genres: string[] = [""];
  public countries: string[] = [""];
  public actors: string[] = [""];
  public writers: string[] = [""];
  public comments: Comment[];

}
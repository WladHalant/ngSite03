import {Comment} from '../users/comment';

export class Film {
  public id = 0;
  public name = '';
  public rating: number;
  public description: string;
  public poster: string;
  public year = 0;
  public path: string;
  public genres: string[] = [''];
  public countries: string[] = [''];
  public actors: string[] = [''];
  public writers: string[] = [''];
  public comments: Comment[];

  public antiYear = 0;
  public antiGenres: string[] = [''];
  public antiActors: string[] = [''];
  public antiWriters: string[] = [''];
  public antiName = '';
  public antiCountries: string[] = [''];

}

import {Injectable} from '@angular/core';
import {Movie} from "../models/movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private id: string = ""
  private titleType: string = "";
  private primaryTitle: string = "";
  private originalTitle: string = "";
  private isAdult: string = "";
  private startYear: string = "";
  private endYear: string = "";
  private length: string = "";
  private genres: string = "";

  private movies: Movie[] = [];

  constructor(private httpClient: HttpClient) {
  }

  public findEndYear(): string {
    return this.endYear;
  }

  public findGenres(): string {
    return this.genres;
  }

  public findId(): string {
    return this.id;
  }

  public findIsAdult(): string {
    return this.isAdult;
  }

  public findLength(): string {
    return this.length;
  }

  public findPrimaryTitle(): string {
    return this.primaryTitle;
  }

  public findOriginalTitle(): string {
    return this.originalTitle;
  }

  public findStartYear(): string {
    return this.startYear;
  }

  public findMovieById(id: string): Movie {
    let movie = new Movie("", "", "", "", "",
      "","","","");

    this.movies.forEach(result => {
      if (result.id === id) {
        movie.id = result.id;
        movie.titleType = result.titleType;
        movie.primaryTitle = result.primaryTitle;
        movie.originalTitle = result.originalTitle;
        movie.isAdult = result.isAdult;
        movie.startYear = result.startYear;
        movie.endYear = result.endYear;
        movie.length = result.length;
        movie.genres = result.genres;
      }
    })

    return movie;
  }

  public findMovieList(): Movie[] {
    return this.movies;
  }

  public findTitleType(): string {
    return this.titleType;
  }

  public initializeMovieList(): void {
    this.httpClient
      .get("../assets/data/dataProduction.tsv", {responseType: "text"})
      .subscribe(data => {
          let tsvToRowArray = data.split("\n");
          for (let index = 1; index < tsvToRowArray.length; index++) {
            let row = tsvToRowArray[index].split("\t");
            this.movies.push(new Movie(row[0], row[1], row[2], row[3], this.checkIfMovieIsForAdults(row[4]), row[5], row[6], row[7], row[8]));
          }
          console.log(this.movies);
        },
        error => {
          console.log(error);
        })
  }

  public updateMovie(movie: Movie): void {
    this.movies.forEach(result => {
      if (result.id === movie.id) {
        result.id = movie.id;
        result.titleType = movie.titleType;
        result.primaryTitle = movie.primaryTitle;
        result.originalTitle = movie.originalTitle;
        result.isAdult = movie.isAdult;
        result.startYear = movie.startYear;
        result.endYear = movie.endYear;
        result.length = movie.length;
        result.genres = movie.genres;
      }
    });
  }

  private checkIfMovieIsForAdults(status: string): string {
    if (status === "0") {
      return "No"
    } else {
      return "Yes"
    }
  }
}

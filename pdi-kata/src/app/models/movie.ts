export class Movie {

  id: string;
  titleType: string;
  primaryTitle: string;
  originalTitle: string;
  isAdult: string;
  startYear: string;
  endYear: string;
  length: string;
  genres: string;

  constructor(id: string, titleType: string, primaryTitle: string, originalTitle: string,
              isAdult: string, startYear: string, endYear: string, length: string, genres: string) {
    this.id = id;
    this.titleType = titleType;
    this.primaryTitle = primaryTitle;
    this.originalTitle = originalTitle;
    this.isAdult = isAdult;
    this.startYear = startYear;
    this.endYear = endYear;
    this.length = length;
    this.genres = genres;
  }
}

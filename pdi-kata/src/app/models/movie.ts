export class Movie {

  id!: string;
  titleType!: string;
  primaryTitle!: string;
  originalTitle!: string;
  isAdult!: string;
  startYear!: string;
  endYear!: string;
  length!: string;
  genres!: string;

  constructor(_id?: string, _titleType?: string, _primaryTitle?: string, _originalTitle?: string,
              _isAdult?: string, _startYear?: string, _endYear?: string, _length?: string, _genres?: string) {
  }
}

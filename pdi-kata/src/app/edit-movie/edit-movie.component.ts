import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Movie} from "../models/movie";
import {FormGroup, FormBuilder} from "@angular/forms";
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent {

  private editMovieForm = this.formBuilder.group({
    id: [this.movieService.findId()],
    isAdult: [this.movieService.findIsAdult()],
    length: [this.movieService.findLength()],
    startYear: [this.movieService.findStartYear()] ,
    endYear: [this.movieService.findEndYear()],
    genres: [this.movieService.findGenres()]
  })

  constructor(public dialogRef:MatDialogRef<EditMovieComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Movie,
              private formBuilder: FormBuilder,
              private movieService: MovieService) { }

  public findEditMovieForm(): FormGroup {
    return this.editMovieForm;
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}


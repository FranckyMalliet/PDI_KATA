import { Component, OnInit } from '@angular/core';
import {MovieService} from "../services/movie.service";
import {TranslateService} from "@ngx-translate/core";
import {MatDialog} from "@angular/material/dialog";
import {EditMovieComponent} from "../edit-movie/edit-movie.component";

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  constructor(public dialog: MatDialog, private movieService: MovieService, private translateService: TranslateService) {
    translateService.addLangs(['en','fr']);
    translateService.setDefaultLang('fr')
  }

  ngOnInit(): void {
    this.movieService.initializeMovieList();
  }

  public findMoviesData() {
    return this.movieService.findMovieList();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditMovieComponent, {
      width: '400px', data: {}
    })

    // dialogRef.afterClosed().subscribe();
  }
}

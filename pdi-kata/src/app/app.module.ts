import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DisplayItemsComponent } from './pagination/display-items.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayMovieComponent,
    EditMovieComponent,
    DisplayItemsComponent,
    PaginationComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

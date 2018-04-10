import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import {RouterModule} from "@angular/router";
import { PaginationComponent } from './pagination/pagination.component';
import {SearchComponent} from "./search/search.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CodeHighlighterModule, TabViewModule} from "primeng/primeng";
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const routes = [
  {path: '', component: FrontPageComponent},
  {path: 'player/:filmID', component: PlayerPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    FrontPageComponent,
    PlayerPageComponent,
    PaginationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    CommonModule,
    FormsModule,
    AutoCompleteModule,
    TabViewModule,
    CodeHighlighterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

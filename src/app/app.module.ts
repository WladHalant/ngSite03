import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import {RouterModule} from "@angular/router";
import { PaginationComponent } from './pagination/pagination.component';

const routes = [
  {path: '', component: FrontPageComponent},
  {path: 'player/:filmName', component: PlayerPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    FrontPageComponent,
    PlayerPageComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

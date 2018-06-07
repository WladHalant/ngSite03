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
import { LeftPanelComponent } from './left-panel/left-panel.component';
import {HttpClientModule} from "@angular/common/http";
import { PlayerComponent } from './player/player.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ContainerPanelAuthComponent } from './container-panel-auth/container-panel-auth.component';
import { UnauthPanelComponent } from './unauth-panel/unauth-panel.component';
import { AuthPanelComponent } from './auth-panel/auth-panel.component';

const routes = [
  {path: '', component: FrontPageComponent},
  {path: 'player/:filmID', component: PlayerPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    FrontPageComponent,
    PlayerPageComponent,
    PaginationComponent,
    SearchComponent,
    LeftPanelComponent,
    PlayerComponent,
    CommentComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    ContainerPanelAuthComponent,
    UnauthPanelComponent,
    AuthPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

    CommonModule,
    FormsModule,
    AutoCompleteModule,
    TabViewModule,
    CodeHighlighterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UnauthPanelComponent, AuthPanelComponent]
})
export class AppModule { }

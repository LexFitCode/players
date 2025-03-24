import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './components/players/players.component';
import { StatsComponent } from './components/stats/stats.component';
import { OddCardComponent } from './components/odd-card/odd-card.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';



@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    PlayersComponent,
    StatsComponent,
    OddCardComponent,
    StatsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

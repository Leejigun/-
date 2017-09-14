import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SearchService } from './search.service';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { MainComponent } from './main.component';
import { PartyComponent } from './party.component';
import { SearchComponent } from './search.component';
import { SearchNameComponent } from './search-name.component';
import { SearchPartyComponent } from './search-party.component';
import { SearchLocationComponent } from './searchLocation.coponent';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PartyComponent,
    SearchComponent,
    SearchNameComponent,
    SearchPartyComponent,
    SearchLocationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [HttpModule,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

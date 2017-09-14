import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { PartyComponent } from './party.component';
import { SearchComponent } from './search.component';
import { SearchNameComponent } from './search-name.component';
import { SearchPartyComponent } from './search-party.component';
import { SearchLocationComponent } from './searchLocation.coponent'

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent},
  { path:'party', component:PartyComponent},
  { path: 'search', component :SearchComponent},
  {path: 'searchName', component :SearchNameComponent},
  {path: 'searchParty', component :SearchPartyComponent},
  {path: 'searchLocation', component :SearchLocationComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
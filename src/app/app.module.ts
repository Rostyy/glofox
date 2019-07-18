import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerDescriptionComponent } from './beer-description/beer-description.component';
import { BeerListComponent } from './beer-list/beer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerDescriptionComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

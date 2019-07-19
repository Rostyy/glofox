import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerDescriptionComponent } from './beer-description/beer-description.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SearchByPipe } from './pipes/search-by.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeerDescriptionComponent,
    BeerListComponent,
    SearchFieldComponent,
    SearchByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

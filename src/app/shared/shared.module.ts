import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniLoaderComponent } from './mini-loader/mini-loader.component';
import { SearchByPipe } from './pipes/search-by/search-by.pipe';
import { ExcludeKegBeerPipe } from './pipes/exclude-keg-beer/exclude-keg-beer.pipe';

@NgModule({
  declarations: [
    MiniLoaderComponent,
    SearchByPipe,
    ExcludeKegBeerPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiniLoaderComponent,
    SearchByPipe,
    ExcludeKegBeerPipe
  ]
})
export class SharedModule { }

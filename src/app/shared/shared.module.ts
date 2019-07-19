import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniLoaderComponent } from './mini-loader/mini-loader.component';
import { SearchByPipe } from './pipes/search-by.pipe';

@NgModule({
  declarations: [ MiniLoaderComponent, SearchByPipe ],
  imports: [
    CommonModule
  ],
  exports: [ MiniLoaderComponent, SearchByPipe ]
})
export class SharedModule { }

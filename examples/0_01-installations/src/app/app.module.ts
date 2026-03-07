import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { App } from './app';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }

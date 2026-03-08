import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';

@NgModule({
  declarations: [
    App,
    InputButtonUnitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }

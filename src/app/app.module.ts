import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs'
import { AppComponent } from './app.component';
import { ComponentsActionModule } from './view/component/components-action/components-action.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentsActionModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

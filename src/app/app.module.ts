import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {FrameworkDirectiveModule} from "../framework/component.module";
import {FrameworkComponentModule} from "../framework/directive.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    FrameworkDirectiveModule,
    FrameworkComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClickOutsideDirective } from '../directives/click-out-side.directive'

@NgModule({
  declarations: [
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    ClickOutsideDirective
  ],
  providers: [],
  bootstrap: []
})

export class CellularDirectiveModule { }

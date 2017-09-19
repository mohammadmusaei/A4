import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {ClickOutsideDirective} from "./directives/click-out-side.directive";
import {BaseFormDirective} from "./directives/base-form.directive";


@NgModule({
  declarations: [
    ClickOutsideDirective,
    BaseFormDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ClickOutsideDirective,
    BaseFormDirective
  ]
})
export class FrameworkComponentModule {
  constructor() {

  }
}


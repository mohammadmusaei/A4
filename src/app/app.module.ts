import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {FrameworkDirectiveModule} from "../framework/component.module";
import {FrameworkComponentModule} from "../framework/directive.module";
import {AppRoutingModule} from "./route.module";
import { ValidationExampleComponent } from './validation-example/validation-example.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ValidationExampleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FrameworkDirectiveModule,
    FrameworkComponentModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

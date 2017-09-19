import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from "./app.component";
import {ValidationExampleComponent} from "./validation-example/validation-example.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'validation', component: ValidationExampleComponent},
  {path: '**', redirectTo: 'home'}
];
const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor() {

  }
}

import { Component, Injector } from '@angular/core';
import {BaseComponent} from '../framework/components/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent<any,null>{
  constructor(injector : Injector){
    super(injector);
  }
}

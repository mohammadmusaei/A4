import { Component, Injector } from '@angular/core';
import {BaseComponent} from '../framework/components/base.component';
import {Validators} from "@angular/forms";

import {ExtendedValidators} from "../framework/validations/validations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent<any,null>{
  constructor(injector : Injector){
    super(injector);
    super.createForm(['name','lastname','age']).registerBeforUnloadEvent();
  }
  public setValidations(): void {
    this.formControls['name'].markAsRequired(true).setValidators(Validators.compose([
      ExtendedValidators.requiredValue('Name is required'),
      ExtendedValidators.min(4),
      ExtendedValidators.func<string>(name=> !name ? true : name.toLowerCase() !== 'bob','Bob is not a valid name!')
    ]));
    this.formControls['age'].markAsRequired(true).setValidators(Validators.compose([
      ExtendedValidators.func<number>(age => age > 17 ,'Your age is under 18!'),
      ExtendedValidators.regExp( /^\d+$/,'Type a valid number')
    ]));
  }
  onSubmit() : void{
    if(this.form.validate()){
      console.log(this.form.value);
    }
    else{
      console.error('Form is not valid');
    }
  }
}

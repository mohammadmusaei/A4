import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import {BaseComponent} from "../../framework/components/base.component";
import {ExtendedValidators} from "../../framework/validations/validations";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-validation-example',
  templateUrl: './validation-example.component.html',
  styleUrls: ['./validation-example.component.css']
})
export class ValidationExampleComponent extends BaseComponent<User,UserService> implements OnInit {

  constructor(injector : Injector){
    super(injector);
    super.createForm(User).registerBeforUnloadEvent(); //create form validation and prevent to close window when form is dirty and touched
  }
  public setValidations(): void { //overwrite this function to set form validations
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

  ngOnInit() {
  }

}

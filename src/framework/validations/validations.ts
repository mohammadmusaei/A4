import {
  AbstractControl,
  FormGroup,
  ValidatorFn,
  Validators,
  FormControl,
  AsyncValidatorFn
}from '@angular/forms';

export class ExtendedValidators extends Validators {
  static requiredValue(message?: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      message = message || "Field is required.";
      return (control.value !== undefined && control.value !== '' && control.value !== null) ? null : {message: message};
    };
  }

  static regExp(regExp: RegExp, message?: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      message = message || "Regex text failed.";
      return regExp.test(control.value) ? null : {message: message};
    };
  }

  static func<T>(func: { (value: T): boolean }, message?: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      message = message || "Function test failed.";
      return (typeof (func) === "function" && func(control.value)) ? null : {message: message};
    };
  }
}

export class ExtendedFormControl extends FormControl {
  public required: boolean;

  constructor(formState?: any, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(formState, validator, asyncValidator);
    return this;
  }

  markAsRequired(required: boolean): ExtendedFormControl {
    this.required = required;
    return this;
  }
}

export class ExtendedFormGroup extends FormGroup {
  constructor(controls: { [key: string]: AbstractControl; }, validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null) {
    super(controls, validator, asyncValidator);
  }

  public validate(): boolean {
    this.updateValueAndValidity();
    return this.valid;
  }
}

import { Injector, Renderer2, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ExtendedFormControl, ExtendedFormGroup} from '../validations/validations';

export class BaseComponent<T,U> {

  protected model : T;
  protected service : U;

  protected form: ExtendedFormGroup;
  protected formControls: { [key: string]: ExtendedFormControl };

  protected router: Router;
  protected route: ActivatedRoute;

  constructor(protected injector : Injector,service? : any){
    this.model = <T>{};
    this.formControls = {};
    this.injectServices(service);
  }

  private injectServices(service : U) : void{
      this.route = this.injector.get(ActivatedRoute);
      this.router = this.injector.get(Router);
      if(service){
        this.service = this.injector.get(service);
      }
  }

  public registerBeforUnloadEvent(func?: { (): boolean }): BaseComponent<T,U> {
    var renderer = this.injector.get(Renderer2);
    var dirty = this.form.dirty;
    if (typeof (func) === 'function')
      dirty = dirty && func();
    renderer.listen('window', 'beforeunload', (evt: any): any => {
      if (this.form.dirty) {
        (evt || window).returnValue = "";
        return "";
      }
      else {
        return undefined;
      }
    });
    return this;
  }

  public static getProperties(object : any): string[] {
    var injector = ReflectiveInjector.resolveAndCreate([object]);
    var a = injector.get(object);
    return Object.keys(a).filter(name => {
      return typeof this[name] !== 'function'
    });
  }

  createForm(model: any): BaseComponent<T, U>
  createForm(...model: string[]): BaseComponent<T, U>
  public createForm(model: any | string[]): BaseComponent<T, U> {
    try {
      if (Array.isArray(model)) {
        model.forEach(key => {
          this.formControls[key] = new ExtendedFormControl();
        })
      }
      else {
        var injector = ReflectiveInjector.resolveAndCreate([model]);
        var ob = injector.get(model);
        BaseComponent.getProperties(ob).forEach(key => {
          this.formControls[key] = new ExtendedFormControl();
        })
      }
      this.form = new ExtendedFormGroup(this.formControls);
      this.setValidations();
    } catch (error) {

    }
    finally {
      return this;
    }
  }

  public setValidations(): void { }

}

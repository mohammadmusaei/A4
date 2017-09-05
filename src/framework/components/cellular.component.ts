import { Injector } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

export class CellularComponent<T,U> {

  protected model : T;
  protected service : U;

  protected router: Router;
  protected route: ActivatedRoute;

  constructor(protected injector : Injector,service? : U){
    this.model = <T>{};
    this.injectServices(service);
  }

  private injectServices(service : U) : void{
      this.route = this.injector.get(ActivatedRoute);
      this.router = this.injector.get(Router);
      if(service){
        this.service = this.injector.get(service);
      }
  }

}


import { Jsonp,RequestOptionsArgs,Response } from '@angular/http';
import { Injector, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpConfiguration } from '../configuration/http.configuration';

@Injectable()
export class JsonpService extends HttpConfiguration{

  private jsonp : Jsonp;

  constructor(private injector : Injector){
    super();
    this.injectServices();
  }

  private injectServices() : void{
    this.jsonp = this.injector.get(Jsonp);
  }

  public request<T>(url:string,options?:RequestOptionsArgs) : Observable<T>{
    return this.jsonp.request(url,this.getRequestOptions(options)).map((response:Response)=>{ return response.json(); });
  }

}


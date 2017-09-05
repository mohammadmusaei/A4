
import { Http, RequestOptionsArgs, Response, URLSearchParams } from "@angular/http";
import { Injector, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { HttpConfiguration } from "../configuration/http.configuration";

@Injectable()
export class HttpService extends HttpConfiguration{

  private http : Http;

  constructor(private injector : Injector){
    super();
    this.injectServices();
  }

  private injectServices() : void{
    this.http = this.injector.get(Http);
  }

  public get<T>(url:string,params?:string | URLSearchParams | {[key: string]: any | any[];} | null,options?:RequestOptionsArgs) : Observable<T> {
    return this.http.get(url,this.getRequestOptions(options,params)).map((response:Response)=>{ return response.json(); });
  }

  public post<T>(url:string,model:Object,options?:RequestOptionsArgs) : Observable<T>{
    return this.http.post(url,JSON.stringify(model),this.getRequestOptions(options)).map((response:Response)=>{ return response.json(); });
  }

  public put<T>(url:string,model:Object,options?:RequestOptionsArgs) : Observable<T>{
    return this.http.put(url,JSON.stringify(model),this.getRequestOptions(options)).map((response:Response)=>{ return response.json(); });
  }

  public delete<T>(url:string,params?:string | URLSearchParams | {[key: string]: any | any[];} | null,options?:RequestOptionsArgs) : Observable<T>{
    return this.http.delete(url,this.getRequestOptions(options,params)).map((response:Response)=>{ return response.json(); });
  }

  public patch<T>(url:string,model:Object,options?:RequestOptionsArgs) : Observable<T>{
    return this.http.patch(url,JSON.stringify(model),this.getRequestOptions(options)).map((response:Response)=>{ return response.json(); });
  }

  public head<T>(url:string,params?:string | URLSearchParams | {[key: string]: any | any[];} | null,options?:RequestOptionsArgs) : Observable<T>{
    return this.http.head(url,this.getRequestOptions(options,params)).map((response:Response)=>{ return response.json(); });
  }

  public options<T>(url:string,params?:string | URLSearchParams | {[key: string]: any | any[];} | null,options?:RequestOptionsArgs) : Observable<T>{
    return this.http.options(url,this.getRequestOptions(options,params)).map((response:Response)=>{ return response.json(); });
  }

  public request<T>(url:string,options?:RequestOptionsArgs) : Observable<T> {
    return this.http.request(url,this.getRequestOptions(options)).map((response:Response)=>{ return response.json(); });
  }

}


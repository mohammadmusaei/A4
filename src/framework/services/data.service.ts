
import { Injector, Injectable } from '@angular/core';
import { URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../services/http.service';
import { JsonpService } from '../services/jsonp.service';
import { DataServiceConfiguration } from '../configuration/data-service.configuration';
import { DefaultUrls } from '../model/enums';
import { IResponse } from '../model/interfaces';

@Injectable()
export abstract class BaseDataService<T> {

  configuration: DataServiceConfiguration;
  protected http: HttpService;
  protected jsonp: JsonpService;

  constructor(protected injector: Injector, module?: string, controller?: string) {
    this.injectServices();
    if (module || controller) {
      this.configuration = new DataServiceConfiguration(module, controller);
    }
  }

  protected setConfiguration(module: string, controller: string): BaseDataService<T> {
    this.configuration = new DataServiceConfiguration(module, controller);
    return this;
  }

  private injectServices(): void {
    this.http = this.injector.get(HttpService);
    this.jsonp = this.injector.get(JsonpService);
  }

  public post(model: Object, options?: RequestOptionsArgs): Observable<T> {
    return this.http.post<T>(this.configuration.getDefaultUrl(DefaultUrls.Post), model);
  }
  public get(params?: string | URLSearchParams | { [key: string]: any | any[]; } | null): Observable<T> {
    return this.http.get<T>(this.configuration.getDefaultUrl(DefaultUrls.Get), params);
  }
  public delete(model: Object, options?: RequestOptionsArgs): Observable<T> {
    return this.http.post<T>(this.configuration.getDefaultUrl(DefaultUrls.Delete), model);
  }
  public getAll(params?: string | URLSearchParams | { [key: string]: any | any[]; } | null): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.configuration.getDefaultUrl(DefaultUrls.GetAll), params);
  }
  public getAllPaged(params?: string | URLSearchParams | { [key: string]: any | any[]; } | null): Observable<IResponse<T>> {
    return this.http.get<IResponse<T>>(this.configuration.getDefaultUrl(DefaultUrls.GetAllPaged), params);
  }
  public getAllLookupPaged(params?: string | URLSearchParams | { [key: string]: any | any[]; } | null): Observable<IResponse<T>> {
    return this.http.get<IResponse<T>>(this.configuration.getDefaultUrl(DefaultUrls.GetAllLookupPaged), params);
  }
  public getAllLookup(params?: string | URLSearchParams | { [key: string]: any | any[]; } | null): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.configuration.getDefaultUrl(DefaultUrls.GetAllLookup), params);
  }
}

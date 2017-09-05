
import { DefaultUrls } from '../model/enums'

export class DataServiceConfiguration {

  private _module: string;
  private _controller: string;
  private _baseUrl : string

  constructor(module: string, controller: string) {
    this._module = module;
    this._controller = controller;
    this._baseUrl = "";
    return this;
  }

  get baseUrl(): string { return this._baseUrl; }
  set baseUrl(baseUrl: string) { this._baseUrl = baseUrl; }
  get module(): string { return this._module; }
  set module(module: string) { this._module = module; }
  get controller(): string { return this._controller; }
  set controller(controller: string) { this._controller = controller; }

  public getUrl(method: string, controller?: string, module?: string): string {
    return `${this.baseUrl} ${module || this.module}/api/${controller || this.controller}/${method}`;
  }

  public getDefaultUrl(url: DefaultUrls, controller?: string, module?: string): string {
    return `${this.baseUrl} ${module || this.module}/api/${controller || this.controller}/${DefaultUrls[url]}`;
  }

}

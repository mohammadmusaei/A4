
import { Headers, RequestOptionsArgs, ResponseContentType, URLSearchParams } from '@angular/http';

export class HttpConfiguration {

  private _header: Headers;
  private _requestOptionsArgs: RequestOptionsArgs;

  constructor() {
    this.header = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      'X-Requested-With': 'XMLHttpRequest'
    });
    this.requestOptionsArgs = {
      responseType: ResponseContentType.Json,
      headers: this.header
    }
  }

  get header(): Headers {
    return this._header;
  }
  set header(header: Headers) {
    this._header = header;
  }
  get requestOptionsArgs(): RequestOptionsArgs {
    return this._requestOptionsArgs;
  }
  set requestOptionsArgs(requestOptionsArgs: RequestOptionsArgs) {
    this._requestOptionsArgs = requestOptionsArgs;
  }
  public getRequestOptions(requestOptionsArgs: RequestOptionsArgs, params?: string | URLSearchParams | { [key: string]: any | any[]; } | null): RequestOptionsArgs {
    this.requestOptionsArgs.params = params;
    return Object.assign(this.requestOptionsArgs, requestOptionsArgs);
  }

}

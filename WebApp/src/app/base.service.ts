import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';
import { environment } from '../environments/environment';


@Injectable()
export class BaseService {

  protected UrlService: string = environment.urlWebAPI;
  protected AtualizarUrl: string = "Update/";
  protected SalvarUrl: string = "Save/";
  protected RemoverUrl: string = "Remove?id=";
  protected BuscarTodos: string = "GetAll/";
  protected BuscarId: string = "GetById/";

  constructor() {
  }

  protected serviceError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(error);
  }

  protected extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }

}

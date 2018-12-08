import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Cor } from './models/cor';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CorService {

  constructor(private http: HttpClient) { 
    super();
  }

  listarTodos(){
    return this.http.get(this.UrlService + "Cor/" + this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error));
  }

}

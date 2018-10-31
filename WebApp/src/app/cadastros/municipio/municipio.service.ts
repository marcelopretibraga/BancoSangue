import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Municipio } from './models/municipio';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MunicipioService extends BaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  salvar(municipio: Municipio) : Observable<any> {
    //http://localhost:60615/api/Municipio/Save/
    return this.http.post(this.UrlService + "Municipio/",
       municipio).catch((error: any) => Observable.throw(error.error));
  }


}

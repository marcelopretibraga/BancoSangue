import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Zils } from './models/Zils';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ZilsService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  salvar(zils: Zils) : Observable<any> {
    return this.http.post(this.UrlService + "Zils/"+this.SalvarUrl,
       zils).catch((error: any) => Observable.throw(error.error));
  }

  listarTodos(){
    return this.http.get(this.UrlService + "Zils/" + this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error));
  }

  atualizar(Zils: any): Observable<any> {
    return this.http.put(this.UrlService + "Zils/" + this.AtualizarUrl, Zils)
      .catch((error: any) => Observable.throw(error.error));
  }

  consultarPorId(id: string): Observable<any> {
    return this.http.get(this.UrlService + "Zils/" + this.BuscarId + id)
      .catch((error: any) => Observable.throw(error.error));
  }

  deletar(id: String): Observable<any> {
    return this.http.delete(this.UrlService + "Zils/" + this.RemoverUrl + id)
      .catch((error: any) => Observable.throw(error.error));
  }


}

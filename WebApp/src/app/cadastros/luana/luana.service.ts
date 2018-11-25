import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Luana } from './models/luana';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LuanaService extends BaseService {


  constructor(private http: HttpClient) { 
    super();
  }

  salvar(luana: Luana) : Observable<any> {
    return this.http.post(this.UrlService + "Luana/"+this.SalvarUrl,
       luana).catch((error: any) => Observable.throw(error.error));
  }

  listarTodos(){
    return this.http.get(this.UrlService + "Luana/" + this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error));
  }

  atualizar(luana: any): Observable<any> {
    return this.http.put(this.UrlService + "Luana/" + this.AtualizarUrl, luana)
      .catch((error: any) => Observable.throw(error.error));
  }

  consultarPorId(id: string): Observable<any> {
    return this.http.get(this.UrlService + "Luana/" + this.BuscarId + id)
      .catch((error: any) => Observable.throw(error.error));
  }

  deletar(id: String): Observable<any> {
    return this.http.delete(this.UrlService + "Luana/" + this.RemoverUrl + id)
      .catch((error: any) => Observable.throw(error.error));
  }
}

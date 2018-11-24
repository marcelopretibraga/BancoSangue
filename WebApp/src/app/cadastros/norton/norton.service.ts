import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './../../base.service';
import { Injectable } from '@angular/core';
import { Norton } from './models/norton';

@Injectable()
export class NortonService extends BaseService{

  constructor(private http: HttpClient) {
    super();
  }

  salvar(norton: Norton): Observable<any> {
    return this.http.post(this.UrlService + "Norton/"+this.SalvarUrl,
    norton).catch((error: any) => Observable.throw(error.error));
  }

  listarTodos(){
    return this.http.get(this.UrlService + "Norton/" + this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error));
  }

  atualizar(norton: any): Observable<any> {
    return this.http.put(this.UrlService + "Norton/" + this.AtualizarUrl, norton)
      .catch((error: any) => Observable.throw(error.error));
  }

  consultarPorId(id: string): Observable<any> {
    return this.http.get(this.UrlService + "Norton/" + this.BuscarId + id)
      .catch((error: any) => Observable.throw(error.error));
  }

  deletar(id: String): Observable<any> {
    return this.http.delete(this.UrlService + "Norton/" + this.RemoverUrl + id)
      .catch((error: any) => Observable.throw(error.error));
  }
}


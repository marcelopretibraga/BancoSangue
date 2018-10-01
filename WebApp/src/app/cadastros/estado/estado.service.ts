import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EstadoService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  salvar(estado: any): Observable<any> {
    console.log('mpb salvar estado .......')
    console.log(estado)
    return this.http.post(this.UrlService + "Estado/" + this.SalvarUrl, estado)
      .catch((error: any) => Observable.throw(error.error));
  }

  listarTodos(): Observable<any> {
    return this.http.get(this.UrlService + "Estado/" + this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error));
  }

  atualizar(estado: any): Observable<any> {
    return this.http.put(this.UrlService + "Estado/" + this.AtualizarUrl, estado)
      .catch((error: any) => Observable.throw(error.error));
  }

  consultarPorId(id: string): Observable<any> {
    return this.http.get(this.UrlService + "Estado/" + this.BuscarId + id)
      .catch((error: any) => Observable.throw(error.error));
  }

  deletar(id: String): Observable<any> {
    return this.http.delete(this.UrlService + "Estado/" + this.RemoverUrl + id)
      .catch((error: any) => Observable.throw(error.error));
  }
}
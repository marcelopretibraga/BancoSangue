import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PedroService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  salvar(pedro: any): Observable<any> {
    console.log('mpb salvar pedro .......')
    console.log(pedro)
    return this.http.post(this.UrlService + "Pedro/" + this.SalvarUrl, pedro)
      .catch((error: any) => Observable.throw(error.error));
  }

  listarTodos(): Observable<any> {
    return this.http.get(this.UrlService + "Pedro/" + this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error));
  }

  atualizar(pedro: any): Observable<any> {
    return this.http.put(this.UrlService + "Pedro/" + this.AtualizarUrl, pedro)
      .catch((error: any) => Observable.throw(error.error));
  }

  consultarPorId(id: string): Observable<any> {
    return this.http.get(this.UrlService + "Pedro/" + this.BuscarId + id)
      .catch((error: any) => Observable.throw(error.error));
  }

  deletar(id: String): Observable<any> {
    return this.http.delete(this.UrlService + "Pedro/" + this.RemoverUrl + id)
      .catch((error: any) => Observable.throw(error.error));
  }

}

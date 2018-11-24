import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matheus } from './models/matheus';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../../base.service';

@Injectable()
export class MatheusService extends BaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  salvar(matheus : Matheus) : Observable<any> {
    return this.http.post(this.UrlService +"Matheus/"+ this.SalvarUrl, 
      matheus).catch((error: any) => Observable.throw(error.error))
  }

  deletar(id : string) : Observable<any> {
    return this.http.delete(this.UrlService +"Matheus/"+ this.RemoverUrl 
      + id).catch((error: any) => Observable.throw(error.error))
  }

  atualizar(matheus : any) : Observable<any> {
    return this.http.put(this.UrlService +"Matheus/"+ this.AtualizarUrl, 
      matheus).catch((error: any) => Observable.throw(error.error))
  }

  listarTodos() {
    return this.http.get(this.UrlService +"Matheus/"+ this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error))
  }

  consultarPorId(id : string) : Observable<any> {
    return this.http.get(this.UrlService +"Matheus/"+ this.BuscarId 
      + id).catch((error: any) => Observable.throw(error.error))
  }

}
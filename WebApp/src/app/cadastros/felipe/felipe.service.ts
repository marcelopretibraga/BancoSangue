import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Felipe } from './models/felipe';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FelipeService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  salvar(felipe: Felipe): Observable<any> {
    //http://localhost:60615/api/Municipio/Save/
    return this.http.post(this.UrlService + "Felipe/" + this.SalvarUrl,
       felipe).catch((error: any) => Observable.throw(error.error));
  }

  listarTodos(){
    return this.http.get(this.UrlService + "Felipe/" + this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error));
  }

  atualizar(felipe: any): Observable<any> {
    return this.http.put(this.UrlService + "Felipe/" + this.AtualizarUrl, felipe)
      .catch((error: any) => Observable.throw(error.error));
  }

  consultarPorId(id: string): Observable<any> {
    return this.http.get(this.UrlService + "Felipe/" + this.BuscarId + id)
      .catch((error: any) => Observable.throw(error.error));
  }

  deletar(id: String): Observable<any> {
    return this.http.delete(this.UrlService + "Felipe/" + this.RemoverUrl + id)
      .catch((error: any) => Observable.throw(error.error));
  }
}

import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Municipio } from './models/municipio';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MunicipioService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  salvar(municipio: Municipio) : Observable<any> {
    //http://localhost:60615/api/Municipio/Save/
    return this.http.post(this.UrlService + "Municipio/"+this.SalvarUrl,
       municipio).catch((error: any) => Observable.throw(error.error));
  }

  listarTodos(){
    return this.http.get(this.UrlService + "Municipio/" + this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error));
  }

  atualizar(municipio: any): Observable<any> {
    return this.http.put(this.UrlService + "Municipio/" + this.AtualizarUrl, municipio)
      .catch((error: any) => Observable.throw(error.error));
  }

  consultarPorId(id: string): Observable<any> {
    return this.http.get(this.UrlService + "Municipio/" + this.BuscarId + id)
      .catch((error: any) => Observable.throw(error.error));
  }

  deletar(id: String): Observable<any> {
    return this.http.delete(this.UrlService + "Municipio/" + this.RemoverUrl + id)
      .catch((error: any) => Observable.throw(error.error));
  }


}

import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { Veiculo } from './models/veiculo';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VeiculoService extends BaseService {


  constructor(private http: HttpClient) { 
    super();
  }

  salvar(veiculo: Veiculo) : Observable<any> {
    //http://localhost:60615/api/Veiculo/Save/
    return this.http.post(this.UrlService + "Veiculo/"+this.SalvarUrl,
       veiculo).catch((error: any) => Observable.throw(error.error));
  }

  listarTodos(){
    return this.http.get(this.UrlService + "Veiculo/" + this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error));
  }

  atualizar(municipio: any): Observable<any> {
    return this.http.put(this.UrlService + "Veiculo/" + this.AtualizarUrl, municipio)
      .catch((error: any) => Observable.throw(error.error));
  }

  consultarPorId(id: string): Observable<any> {
    return this.http.get(this.UrlService + "Veiculo/" + this.BuscarId + id)
      .catch((error: any) => Observable.throw(error.error));
  }

  deletar(id: String): Observable<any> {
    return this.http.delete(this.UrlService + "Veiculo/" + this.RemoverUrl + id)
      .catch((error: any) => Observable.throw(error.error));
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../base.service';
import { Veiculo } from './models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService extends BaseService {

  constructor(private http : HttpClient) {
    super();
   }

   salvar(veiculo: Veiculo) : Observable<any> {
    return this.http.post(this.UrlService + "Veiculo/"+this.SalvarUrl,
       veiculo).catch((error: any) => Observable.throw(error.error));
  }

  listarTodos(){
    return this.http.get(this.UrlService + "Veiculo/" + this.BuscarTodos)
      .catch((error: any) => Observable.throw(error.error));
  }

  atualizar(veiculo: any): Observa ble<any> {
    return this.http.put(this.UrlService + "Veiculo/" + this.AtualizarUrl, veiculo)
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

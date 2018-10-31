import { Component, OnInit } from '@angular/core';
import {Municipio} from "../../municipio/models/municipio";
import { EstadoService } from '../../estado/estado.service';
import { Estado } from '../../estado/estado/models/estado';
import { MunicipioService } from '../municipio.service';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {

  private municipio: Municipio;
  public estados: Array<Estado>;

  constructor(private estadoService: EstadoService, 
              private municipioService: MunicipioService
  ) { }
  
  ngOnInit() {
    this.municipio = new Municipio();
    this.listarEstados();
  }

  listarEstados(){
    this.estadoService.listarTodos().subscribe(dadosRetorno => {
      if (dadosRetorno != null){
        this.estados = dadosRetorno;
      }
    })
  }

  salvar(){
    console.log("Salvando municipio")
    console.log(this.municipio)

    this.municipioService.salvar(this.municipio)
      .subscribe(retorno => {
        if (retorno != null)
          console.log("Salvou o Municipio")
      });
  }

}

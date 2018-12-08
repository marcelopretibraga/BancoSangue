import { Component, OnInit } from '@angular/core';
import {Veiculo} from "../../veiculo/models/veiculo";
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  private veiculo: Veiculo;

  constructor(private veiculoService : VeiculoService
  ) { }
  
  ngOnInit() {
    this.veiculo = new Veiculo();
    this.listarEstados();
  }

  listarEstados(){
    this.veiculoService.listarTodos().subscribe(dadosRetorno => {
      if (dadosRetorno != null){
        this.veiculo = dadosRetorno;
      }
    })
  }

  salvar(){
    console.log("Salvando Veiculo")
    console.log(this.veiculo)

    this.veiculoService.salvar(this.veiculo)
      .subscribe(retorno => {
        if (retorno != null)
          console.log("Salvou o Veiculo")
      });
  }

}

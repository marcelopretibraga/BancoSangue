import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {

  private Veiculo: veiculo;

  constructor(private veiculoService : VeiculoService)  { }

  ngOnInit() {
    this.Veiculo = new Veiculo();
  }

  /*listarVeiculos(){
    this.veiculoService.listarTodos().subscribe(dadosRetorno => {
      if (dadosRetorno != null){
        this. = dadosRetorno;
      }
    })
  }*/

  salvar(){
    console.log("Salvando veiculo")
    console.log(this.veiculo)

    this.veiculoService.salvar(this.veiculo)
      .subscribe(retorno => {
        if (retorno != null)
          console.log("Salvou o veiculo")
      });
  }

}

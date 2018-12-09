import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../models/veiculo';
import { Cor } from '../models/cor';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {

  private veiculo: Veiculo;
  public cores: Array<Cor>;

  constructor(private veiculoService: VeiculoService)  { }

  ngOnInit() {
    this.veiculo = new Veiculo();
  }

  listarCores() {
    this.veiculoService.listarTodos().subscribe(dadosRetorno => {
      if (dadosRetorno != null) {
        this.cores = dadosRetorno;
      }
    });
  }

  salvar() {
    console.log('Salvando veiculo');
    console.log(this.veiculo);

    this.veiculoService.salvar(this.veiculo)
      .subscribe(retorno => {
        if (retorno != null) {
          console.log('Salvou o veiculo');
        }
      });
  }

}

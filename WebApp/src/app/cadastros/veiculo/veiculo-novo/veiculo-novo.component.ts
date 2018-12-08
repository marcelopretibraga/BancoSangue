import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { EstadoService } from '../../estado/estado.service';
import { MatSnackBar } from '@angular/material';
import { StringValidation } from '../../../util/string-validation';
import { Veiculo } from '../models/veiculo';

@Component({
  selector: 'app-veiculo-novo',
  templateUrl: './veiculo-novo.component.html',
  styleUrls: ['./veiculo-novo.component.css']
})
export class VeiculoNovoComponent implements OnInit {

  private veiculo: Veiculo;
  private edicao: boolean = false;
  private codigoVeiculo: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService, 
    private estadoService: EstadoService,
    private snackBar: MatSnackBar,
    public router: Router,
  ) { 
    this.veiculo = new Veiculo();
  }

  ngOnInit() {
    //this.estado.ativo = true;
    this.activatedRoute.params.subscribe(
      params => {
        console.log('Parametro ------>')
        console.log(params)
        if (!StringValidation.isNullOrEmpty(params.id)) {
          this.codigoVeiculo = params.id;
          this.carregarPorId();
          this.edicao = true;
        }
      }
    );
  }

  salvar() {
    this.spinnerService.display(true);
    this.estadoService.salvar(this.veiculo).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../veiculo']);
        //this.snackBar.openFromComponent(NotificacaoComponent, {
       //   data: [TipoNotificacao.sucesso, 'Operação realizada com sucesso!'], duration: 4000,
        //});
      }
      this.spinnerService.display(false);
    },
      error => {
        this.spinnerService.display(false);
       // this.snackBar.openFromComponent(NotificacaoComponent, {
       //   data: [TipoNotificacao.erro, error], duration: 4000,
       // });
      });
  }

  atualizar() {
    this.spinnerService.display(true);
    this.estadoService.atualizar(this.veiculo).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../veiculo']);
        //this.snackBar.openFromComponent(NotificacaoComponent, {
        //  data: [TipoNotificacao.sucesso, 'Atualizado com sucesso!'],  duration: 4000,
        //});
      }
      this.spinnerService.display(false);
    },
      error => {
        this.spinnerService.display(false);
        //this.snackBar.openFromComponent(NotificacaoComponent, {
        //  data: [TipoNotificacao.erro, error], duration: 4000,
       // });
      });
  }

  carregarPorId() {
    var self = this;
    this.spinnerService.display(true);
    this.estadoService.consultarPorId(this.codigoVeiculo)
      .subscribe(data => {
        if (data != null) {
          self.veiculo = new Veiculo();
          self.veiculo.Codigo = data.Codigo;
          self.veiculo.Nr_placa = data.Nr_placa;
          self.veiculo.Nr_ano = data.ano;
          self.veiculo.Nr_chassi = data.Nr_chassi;
          self.veiculo.Nr_modelo = data.Nr_modelo;
          self.veiculo.Nr_passageiros = data.Nr_passageiros;
          self.veiculo.Nr_portas = data.Nr_portas;
          self.veiculo.Dt_registro = data.Dt_registro;
          self.veiculo.Cd_cor = data.Cd_cor;
          //self.estado.ativo = data.ativo;
        }
        self.spinnerService.display(false);
      });
  }

}

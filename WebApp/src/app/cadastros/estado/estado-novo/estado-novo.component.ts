import { Component, OnInit } from '@angular/core';
import { Estado } from '../estado/models/estado';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { EstadoService } from '../estado.service';
import { StringValidation } from '../../../util/string-validation';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-estado-novo',
  templateUrl: './estado-novo.component.html',
  styleUrls: ['./estado-novo.component.css']
})
export class EstadoNovoComponent implements OnInit {

  private estado: Estado;
  private edicao: boolean = false;
  private codigoEstado: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService,
    private estadoService: EstadoService,
    private snackBar: MatSnackBar,
    public router: Router,
  ) {
    this.estado = new Estado();
  }

  ngOnInit() {
    //this.estado.ativo = true;
    this.activatedRoute.params.subscribe(
      params => {
        console.log('Parametro ------>')
        console.log(params)
        if (!StringValidation.isNullOrEmpty(params.id)) {
          this.codigoEstado = params.id;
          this.carregarPorId();
          this.edicao = true;
        }
      }
    );
  }

  salvar() {
    this.spinnerService.display(true);
    this.estadoService.salvar(this.estado).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../estado']);
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
    this.estadoService.atualizar(this.estado).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../estado']);
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
    this.estadoService.consultarPorId(this.codigoEstado)
      .subscribe(data => {
        if (data != null) {
          self.estado = new Estado();
          self.estado.codigo = data.codigo;
          self.estado.descricao = data.descricao;
          self.estado.sigla = data.sigla;
          //self.estado.ativo = data.ativo;
        }
        self.spinnerService.display(false);
      });
  }

}

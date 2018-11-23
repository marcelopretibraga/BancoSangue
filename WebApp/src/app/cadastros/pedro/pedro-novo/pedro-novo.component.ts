import { Component, OnInit } from '@angular/core';
import { Pedro } from '../pedro/models/pedro';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { PedroService } from '../pedro.service';
import { StringValidation } from '../../../util/string-validation';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pedro-novo',
  templateUrl: './pedro-novo.component.html',
  styleUrls: ['./pedro-novo.component.css']
})
export class PedroNovoComponent implements OnInit {

  private pedro: Pedro;
  private edicao: boolean = false;
  private codigoPedro: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService, 
    private pedroService: PedroService,
    private snackBar: MatSnackBar,
    public router: Router,
  ) { 
    this.pedro = new Pedro();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        console.log('Parametro ------>')
        console.log(params)
        if (!StringValidation.isNullOrEmpty(params.id)) {
          this.codigoPedro = params.id;
          this.carregarPorId();
          this.edicao = true;
        }
      }
    );
  }

  salvar() {
    this.spinnerService.display(true);
    this.pedroService.salvar(this.pedro).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../pedro/list']);
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

  voltar() {
    this.spinnerService.display(true);
    this.router.navigate(['../pedro/list']);
  }

  atualizar() {
    this.spinnerService.display(true);
    this.pedroService.atualizar(this.pedro).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../pedro/list']);
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
    this.pedroService.consultarPorId(this.codigoPedro)
      .subscribe(data => {
        if (data != null) {
          self.pedro = new Pedro();
          self.pedro.codigo = data.codigo;
          self.pedro.nome = data.nome;
          self.pedro.idade = data.idade;
          self.pedro.total = data.total;
        }
        self.spinnerService.display(false);
      });
  }

}

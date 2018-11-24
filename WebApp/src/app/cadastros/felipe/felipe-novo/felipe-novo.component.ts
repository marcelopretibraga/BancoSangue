import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { FelipeService } from '../felipe.service';
import { StringValidation } from '../../../util/string-validation';
import { MatSnackBar } from '@angular/material';
import { Felipe } from '../models/felipe';

@Component({
  selector: 'app-felipe-novo',
  templateUrl: './felipe-novo.component.html',
  styleUrls: ['./felipe-novo.component.css']
})
export class FelipeNovoComponent implements OnInit {

  private felipe: Felipe;
  private edicao: boolean = false;
  private codigoFelipe: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService,
    private felipeService: FelipeService,
    private snackBar: MatSnackBar,
    public router: Router,
  ) {
    this.felipe = new Felipe();
  }

  ngOnInit() {
    //this.estado.ativo = true;
    this.activatedRoute.params.subscribe(
      params => {
        console.log('Parametro ------>')
        console.log(params)
        if (!StringValidation.isNullOrEmpty(params.id)) {
          this.codigoFelipe = params.id;
          this.carregarPorId();
          this.edicao = true;
        }
      }
    );
  }

  salvar() {
    this.spinnerService.display(true);
    this.felipeService.salvar(this.felipe).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../felipe']);
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
    this.felipeService.atualizar(this.felipe).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../felipe']);
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
    this.felipeService.consultarPorId(this.codigoFelipe)
      .subscribe(data => {
        if (data != null) {
          self.felipe = new Felipe();
          self.felipe.codigo = data.codigo;
          self.felipe.nome = data.nome;
          self.felipe.idade = data.idade;
          self.felipe.total = data.total;
        }
        self.spinnerService.display(false);
      });
  }

}

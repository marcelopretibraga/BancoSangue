import { MatSnackBar } from '@angular/material';
import { NortonService } from './../norton.service';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { Norton } from './../models/norton';
import { Component, OnInit } from '@angular/core';
import { StringValidation } from '../../../util/string-validation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-norton',
  templateUrl: './norton.component.html',
  styleUrls: ['./norton.component.css']
})
export class NortonComponent implements OnInit {

  private norton: Norton;
  private codigoNorton: any;
  private edicao: boolean = false;

  constructor(
      private nortonService: NortonService,
      private activatedRoute: ActivatedRoute,
      private spinnerService: SpinnerService,
      private snackBar: MatSnackBar,
      public router: Router,
  ) {
    this.norton = new Norton();
  }

  ngOnInit() {
    this.norton = new Norton,
    this.activatedRoute.params.subscribe(
      params => {
        console.log('Parametro ------>')
        console.log(params)
        if (!StringValidation.isNullOrEmpty(params.id)) {
          this.codigoNorton = params.id;
          this.carregarPorId();
          this.edicao = true;
        }
      }
    );
  }

  voltar(){
    console.log("Voltando")
    this.router.navigate(['../norton/list']);
  }

  salvar(){
    console.log("Salvando norton")
    console.log(this.norton)

    this.nortonService.salvar(this.norton)
      .subscribe(retorno => {
        if (retorno != null) {
          this.router.navigate(['../norton/list']);
          console.log("Salvou o Norton");
        }
      });
  }

  atualizar() {
    this.spinnerService.display(true);
    this.nortonService.atualizar(this.norton).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../norton/list']);
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
    this.nortonService.consultarPorId(this.codigoNorton)
      .subscribe(data => {
        if (data != null) {
          self.norton = new Norton();
          self.norton.codigo = data.codigo;
          self.norton.nome = data.nome;
          self.norton.idade = data.idade;
          self.norton.total = data.total;
        }
        self.spinnerService.display(false);
      });
  }
}

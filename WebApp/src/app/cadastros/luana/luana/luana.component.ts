import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { LuanaService } from '../luana.service';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { Luana } from '../models/luana';
import { StringValidation } from '../../../util/string-validation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-luana',
  templateUrl: './luana.component.html',
  styleUrls: ['./luana.component.css']
})
export class LuanaComponent implements OnInit {

  private luana: Luana;
  private codigoLuana: any;
  private edicao: boolean = false;


  constructor(
    private luanaService: LuanaService,
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar,
    public router: Router,
) {
  this.luana = new Luana();
}

  
ngOnInit() {
  this.luana = new Luana,
  this.activatedRoute.params.subscribe(
    params => {
      console.log('Parametro ------>')
      console.log(params)
      if (!StringValidation.isNullOrEmpty(params.id)) {
        this.codigoLuana = params.id;
        this.carregarPorId();
        this.edicao = true;
      }
    }
  );
}

  voltar(){
    console.log("voltando")
    this.router.navigate(['../luana/list']);
  }

  atualizar() {
    this.spinnerService.display(true);
    this.luanaService.atualizar(this.luana).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../luana/list']);
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

  salvar(){
    console.log("Salvando")
    console.log(this.luana)

    this.luanaService.salvar(this.luana)
      .subscribe(retorno => {
        if (retorno != null)
          console.log("Salvou ")
      });
  }

  
  carregarPorId() {
    var self = this;
    this.spinnerService.display(true);
    this.luanaService.consultarPorId(this.codigoLuana)
      .subscribe(data => {
        if (data != null) {
          self.luana = new Luana();
          self.luana.codigo = data.codigo;
          self.luana.nome = data.nome;
          self.luana.idade = data.idade;
          self.luana.total = data.total;
        }
        self.spinnerService.display(false);
      });
  }

}


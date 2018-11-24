import { Component, OnInit } from '@angular/core';
import { Matheus } from '../models/matheus';
import { MatheusService } from '../matheus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { StringValidation } from '../../../util/string-validation';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-matheus',
  templateUrl: './matheus.component.html',
  styleUrls: ['./matheus.component.css']
})
export class MatheusComponent implements OnInit {

  private matheus : Matheus;
  private edicao : boolean = false;
  private codigoMatheus : any;

  constructor(private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService, 
    private matheusService: MatheusService,
    private snackBar: MatSnackBar,
    public router: Router,) { 
      this.matheus = new Matheus();
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        console.log('Parametro ------>')
        console.log(params)
        if (!StringValidation.isNullOrEmpty(params.id)) {
          this.codigoMatheus = params.id;
          this.carregarPorId();
          this.edicao = true;
        }
      }
    );
  }

  salvar() {
    this.spinnerService.display(true);
    this.matheusService.salvar(this.matheus).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../matheus']);
      }
      this.spinnerService.display(false);
    },
      error => {
        this.spinnerService.display(false);
      });
  }

  atualizar() {
    this.spinnerService.display(true);
    this.matheusService.atualizar(this.matheus).subscribe(sucesso => {
      if (sucesso != null) {
        this.router.navigate(['../matheus']);
      }
      this.spinnerService.display(false);
    },
      error => {
        this.spinnerService.display(false);
      });
  }

  carregarPorId() {
    var self = this;
    this.spinnerService.display(true);
    this.matheusService.consultarPorId(this.codigoMatheus)
      .subscribe(data => {
        if (data != null) {
          self.matheus = new Matheus();
          self.matheus.codigo = data.codigo;
          self.matheus.nome = data.nome;
          self.matheus.idade = data.idade;
          self.matheus.valortotal = data.valortotal;
        }
        self.spinnerService.display(false);
      });
  }

}

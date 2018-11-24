import { Component, OnInit, ViewChild } from '@angular/core';
import { Zils } from '../models/Zils';
import { ZilsService } from '../Zils.service';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { StringValidation } from '../../../util/string-validation';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {

  public displayedColumns = ['actionsColumn', 'codigo', 'descricao', 'idade', 'total'];
  private dataSource: any;
  public palavraChave: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  activatedRoute: any;
  constructor(private zilsService: ZilsService,
    private spinnerService: SpinnerService,
    private dialog: MatDialog,
    public router: Router) { }

  private zils: Zils;
  private codigoZils : any;
  
  private edicao: boolean = false;


  ngOnInit() {
    this.zils = new Zils();
    this.activatedRoute.params.subscribe(
      params => {
        console.log('Parametro ------>')
        console.log(params)
        if (!StringValidation.isNullOrEmpty(params.id)) {
          this.codigoZils = params.id;
          this.carregarPorId();
          this.edicao = true;
          
        }
      }
    );
  }

  listarTodos() {
    var self = this;
    this.spinnerService.display(true);
    this.zilsService.listarTodos()
      .subscribe(response => {
        console.log('mpb retorno do response --->')
        console.log(response);
        if (response != null) {
          this.carregaGridUpperCase(response);
          this.dataSource = new MatTableDataSource<Zils>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sortingDataAccessor = (data: Zils, property: string) => {
            switch (property) {
              case 'nr_codigo': return data.codigo;
              case 'ds_nome': return data.descricao;
              case 'nr_idade': return data.idade;
              case 'vl_total': return data.valorTotal;
              default: return '';
            }
          }
          this.dataSource.sort = this.sort;
          if (self.palavraChave)
            if (!StringValidation.isNullOrEmpty(self.palavraChave)) {
              self.applyFilter(self.palavraChave);
            }
        }
        this.spinnerService.display(false);
      },
        error => {
          this.spinnerService.display(false);
          console.log('erro ao consultar dados');
          console.log(error);
        }
      )
  }


  salvar() {
    console.log("Alterando Zils")
    console.log(this.zils)

    this.zilsService.atualizar(this.zils)
      .subscribe(retorno => {
        if (retorno != null)
          console.log("Salvou o Municipio")
      });
  }

  carregarPorId() {
    var self = this;
    this.spinnerService.display(true);
    this.zilsService.consultarPorId(this.codigoEstado)
      .subscribe(data => {
        if (data != null) {
          self.zils = new Zils();
          self.zils.codigo = data.codigo;
          self.zils.descricao = data.descricao;
          self.zils.idade = data.idade;
          self.zils.valorTotal = data.valorTotal
          //self.estado.ativo = data.ativo;
        }
        self.spinnerService.display(false);
      });
  }
}

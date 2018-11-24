import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ZilsService } from '../Zils.service';
import { Zils } from '../models/Zils';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {
  @ViewChild(MatPaginator) paginacao: MatPaginator;
  @ViewChild(MatSort) ordenacao: MatSort;
  constructor(private zilsService: ZilsService,
    private dialog: MatDialog,
    public router: Router) { }
  //Propriedade responsável por exibir os campos no HTML
  public displayedColumns: any = ['actionsColumn', 'codigo', 'descricao', 'idade', 'valorTotal'];
  public fonteDados: any;
  public palavraChave: string;

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    this.zilsService.listarTodos()
      .subscribe(retornoBackend => {
        console.log("dados Zils em teste")
        console.log(retornoBackend);
        //Atribui os dados no datasource da Table (Fonte de Dados)
        this.fonteDados = new MatTableDataSource<Zils>(retornoBackend);
        this.fonteDados.paginator = this.paginacao;
        this.fonteDados.sortingDataAccessor = (zils: Zils, property: string) => {
          switch (property) {
            case 'nr_codigo': return zils.codigo;
            case 'ds_nome': return zils.descricao;
            case 'nr_idade': return zils.idade;
            case 'vl_total': return zils.valorTotal;
            default: return '';
          }
        }
        this.fonteDados.sort = this.ordenacao;

        console.log("dados Zils em teste")
        console.log(retornoBackend);
      });
  }
  aplicaFiltro(dadoFiltro: any) {
    console.log("chamou o aplicar filtro passando " + dadoFiltro)
    dadoFiltro = dadoFiltro.trim(); // Remove whitespace
    dadoFiltro = dadoFiltro.toUpperCase(); // MatTableDataSource defaults to lowercase matches

    this.palavraChave = dadoFiltro;
    this.fonteDados.filterPredicate = (data: Zils, filter: string) =>
      data.descricao.toUpperCase().indexOf(filter) != -1 ||
      data.codigo.toString().indexOf(filter) != -1 ||
      data.idade.toString().indexOf(filter) != -1 ||
      data.valorTotal.toString().indexOf(filter) != -1;
    this.fonteDados.filter = dadoFiltro;
  }

  excluirConfirmacao(codigo: String) {

    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: 'Confirmar exclusão do registro ?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
      if (isConfirm)
        this.deletar(codigo);
    });
  }

  deletar(codigo: String) {
    console.log('mpb deletar código ------> ' + codigo)
    var self = this;
    this.zilsService.deletar(codigo)
      .subscribe(data => {
        if (data != null) {
          self.listarTodos();
        }
      });
  }

  editar(id: String) {
    this.router.navigate(['../Zils/alterar', id]);
  }


}

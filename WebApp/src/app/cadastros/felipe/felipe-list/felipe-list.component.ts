import { Component, OnInit, ViewChild } from '@angular/core';
import { Felipe } from '../models/felipe';
import { FelipeService } from '../../felipe/felipe.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-felipe-list',
  templateUrl: './felipe-list.component.html',
  styleUrls: ['./felipe-list.component.css']
})
export class FelipeListComponent implements OnInit {

  @ViewChild(MatPaginator) paginacao: MatPaginator;
  @ViewChild(MatSort) ordenacao: MatSort;
  constructor(private felipeService : FelipeService,
    private dialog: MatDialog,
    public router: Router ) { }
  //Propriedade responsável por exibir os campos no HTML
  public displayedColumns: any = ['actionsColumn','codigo', 'nome', 'idade', 'total'];
  public fonteDados: any;
  public palavraChave: string;

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    this.felipeService.listarTodos()
    .subscribe(retornoBackend => {
      this.fonteDados = new MatTableDataSource<Felipe>(retornoBackend);
      this.fonteDados.paginator = this.paginacao;
      this.fonteDados.sortingDataAccessor = (felipe: Felipe, property: string) => {
        switch (property) {
          case 'codigo': return felipe.codigo;
          case 'nome': return felipe.nome;
          case 'idade': return felipe.idade;
          case 'total': return felipe.total;
          default: return '';
        }
      }
      this.fonteDados.sort = this.ordenacao;

      console.log("dados felipe em teste");
      console.log(retornoBackend);
    });
  }

  aplicaFiltro(dadoFiltro: any){
    console.log("chamou o aplicar filtro passando "+dadoFiltro);
    dadoFiltro = dadoFiltro.trim(); // Remove whitespace
    dadoFiltro = dadoFiltro.toUpperCase(); // MatTableDataSource defaults to lowercase matches

    this.palavraChave = dadoFiltro;
    this.fonteDados.filterPredicate = (data: Felipe, filter: string) =>
      data.nome.toUpperCase().indexOf(filter) != -1 ||
      data.codigo.toString().indexOf(filter) != -1 ||
      data.idade.toString().indexOf(filter) != -1 ||
      data.total.toString().indexOf(filter) != -1;
    this.fonteDados.filter = dadoFiltro;
  }

  excluirConfirmacao(codigo: String) {

    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: 'Confirmar exclusão do registro?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
        if(isConfirm) {
          this.deletar(codigo);
        }
    });
  }

  deletar(codigo : String) {
    console.log('mpb deletar código ------> '+codigo);
    var self = this;
    this.felipeService.deletar(codigo)
      .subscribe(data => {
        if (data != null)
        {
          self.listarTodos();
        }
      });
  }

  editar(id : String) {
    this.router.navigate(['../felipe/editar', id]);
  }
}

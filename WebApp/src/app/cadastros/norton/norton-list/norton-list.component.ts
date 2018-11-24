import { Norton } from './../models/norton';
import { NortonService } from './../norton.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-norton-list',
  templateUrl: './norton-list.component.html',
  styleUrls: ['./norton-list.component.css']
})
export class NortonListComponent implements OnInit {

  @ViewChild(MatPaginator) paginacao: MatPaginator;
  @ViewChild(MatSort) ordenacao: MatSort;
  constructor(private nortonService: NortonService,
    private dialog: MatDialog,
    public router: Router ) { }
  //Propriedade responsável por exibir os campos no HTML
  public displayedColumns: any = ['actionsColumn','codigo', 'nome', 'idade', 'valor_total'];
  public dataSource: any;
  public palavraChave: string;

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos(){
    this.nortonService.listarTodos()
    .subscribe(retornoBackend => {
      this.dataSource = new MatTableDataSource<Norton>(retornoBackend);
      this.dataSource.paginator = this.paginacao;
      this.dataSource.sortingDataAccessor = (norton: Norton, property: string) => {
        switch (property) {
          case 'codigo': return norton.codigo;
          case 'nome': return norton.nome;
          case 'iadde': return norton.idade;
          case 'valor_total': return norton.total;
          default: return '';
        }
      }
      this.dataSource.sort = this.ordenacao;

      console.log("dados norton em teste")
      console.log(retornoBackend);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toUpperCase(); // MatTableDataSource defaults to lowercase matches

    this.palavraChave = filterValue;
    this.dataSource.filterPredicate = (data: Norton, filter: string) =>
      data.nome.toUpperCase().indexOf(filter) != -1 ||
      data.idade.toString().indexOf(filter) != -1 ||
      data.total.toString().indexOf(filter) != -1 ||
      data.codigo.toString().indexOf(filter) != -1;
    this.dataSource.filter = filterValue;
  }

  excluirConfirmacao(codigo : String) {

    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: 'Confirmar exclusão do registro ?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
        if(isConfirm)
          this.deletar(codigo);
    });
  }

  deletar(codigo : String) {
    console.log('mpb deletar código ------> '+codigo)
    var self = this;
    this.nortonService.deletar(codigo)
      .subscribe(data => {
        if (data != null)
        {
          self.listarTodos();
        }
      });
  }

  editar(id : String) {
    this.router.navigate(['../norton/editar', id]);
  }

}

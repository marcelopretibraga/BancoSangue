import { Luana } from './../models/luana';
import { LuanaService } from './../luana.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-luana-list',
  templateUrl: './luana-list.component.html',
  styleUrls: ['./luana-list.component.css']
})
export class LuanaListComponent implements OnInit {

  @ViewChild(MatPaginator) paginacao: MatPaginator;
  @ViewChild(MatSort) ordenacao: MatSort;
  constructor(private luanaService: LuanaService,
    private dialog: MatDialog,
    public router: Router ) { }
  //Propriedade responsável por exibir os campos no HTML
  public displayedColumns: any = ['actionsColumn','codigo', 'nome', 'idade', 'total'];
  public dataSource: any;
  public palavraChave: string;

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos(){
    this.luanaService.listarTodos()
    .subscribe(retornoBackend => {
      this.dataSource = new MatTableDataSource<Luana>(retornoBackend);
      this.dataSource.paginator = this.paginacao;
      this.dataSource.sortingDataAccessor = (luana: Luana, property: string) => {
        switch (property) {
          case 'codigo': return luana.codigo;
          case 'nome': return luana.nome;
          case 'iadde': return luana.idade;
          case 'total': return luana.total;
          default: return '';
        }
      }
      this.dataSource.sort = this.ordenacao;

      console.log("teste")
      console.log(retornoBackend);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toUpperCase(); // MatTableDataSource defaults to lowercase matches

    this.palavraChave = filterValue;
    this.dataSource.filterPredicate = (data: Luana, filter: string) =>
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
    this.luanaService.deletar(codigo)
      .subscribe(data => {
        if (data != null)
        {
          self.listarTodos();
        }
      });
  }

  editar(id : String) {
    this.router.navigate(['../luana/editar', id]);
  }

}

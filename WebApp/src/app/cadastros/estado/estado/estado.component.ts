import { Component, OnInit, ViewChild } from '@angular/core';
import { EstadoService } from '../estado.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Estado } from './models/estado';
import { StringValidation } from '../../../util/string-validation';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  public displayedColumns = ['actionsColumn','codigo', 'descricao', 'sigla'];
  private dataSource: any;
  public palavraChave: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private estadoService: EstadoService, 
    private spinnerService: SpinnerService, 
    private dialog: MatDialog, 
    public router: Router) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    var self = this;
    this.spinnerService.display(true);
    this.estadoService.listarTodos()
      .subscribe(response => {
        console.log('mpb retorno do response --->')
        console.log(response);
        if (response != null) {
          this.carregaGridUpperCase(response);
          this.dataSource = new MatTableDataSource<Estado>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sortingDataAccessor = (data: Estado, property: string) => {
            switch (property) {
              case 'codigo': return data.codigo;
              case 'descricao': return data.descricao;
              case 'sigla': return data.sigla;
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
          console.log('errro ao consultar dados');
          console.log(error);
        }
      )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toUpperCase(); // MatTableDataSource defaults to lowercase matches

    this.palavraChave = filterValue;
    this.dataSource.filterPredicate = (data: Estado, filter: string) =>
      data.descricao.indexOf(filter) != -1 ||
      data.sigla.indexOf(filter) != -1 || 
      data.codigo.toString().indexOf(filter) != -1;
    this.dataSource.filter = filterValue;
  }

  carregaGridUpperCase(estados: Estado[]): Estado[] {
    let num: number = 0;
    while (num <= estados.length - 1) {
      estados[num].descricao = estados[num].descricao.toUpperCase();
      estados[num].sigla = estados[num].sigla.toLocaleUpperCase();
      num++;
    }
    return estados;
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
    this.spinnerService.display(true); 
    this.estadoService.deletar(codigo)            
      .subscribe(data => {    
        if (data != null)
        {
          self.listarTodos();
        }   
        self.spinnerService.display(false);              
      });
  }

  editar(id : String) {    
    this.router.navigate(['../estado/editar', id]);
  }

}

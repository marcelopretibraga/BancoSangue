import { Component, OnInit, ViewChild } from '@angular/core';
import { MatheusService } from '../matheus.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Matheus } from '../models/matheus';
import { StringValidation } from '../../../util/string-validation';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-matheus-list',
  templateUrl: './matheus-list.component.html',
  styleUrls: ['./matheus-list.component.css']
})
export class MatheusListComponent implements OnInit {

  public displayedColumns = ['actionsColumn','codigo', 'nome', 'idade', 'total'];
  private dataSource: any;
  public palavraChave: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private matheusService: MatheusService, 
    private spinnerService: SpinnerService, 
    private dialog: MatDialog, 
    public router: Router) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    var self = this;
    this.spinnerService.display(true);
    this.matheusService.listarTodos()
      .subscribe(response => {
        console.log('mpb retorno do response --->')
        console.log(response);
        if (response != null) {
          this.carregaGridUpperCase(response);
          this.dataSource = new MatTableDataSource<Matheus>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sortingDataAccessor = (data: Matheus, property: string) => {
            switch (property) {
              case 'codigo': return data.codigo;
              case 'nome': return data.nome;
              case 'idade': return data.idade;
              case 'total': return data.total
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
      this.dataSource.filterPredicate = (data: Matheus, filter: string) =>
        data.nome.indexOf(filter) != -1 ||
        data.idade.toString().indexOf(filter) != -1 || 
        data.codigo.toString().indexOf(filter) != -1 ||
        data.total.toString().indexOf(filter) != -1;
      this.dataSource.filter = filterValue;
    }

  carregaGridUpperCase(matheuss: Matheus[]): Matheus[] {
    let num: number = 0;
    while (num <= matheuss.length - 1) {
      matheuss[num].nome = matheuss[num].nome.toUpperCase();
      num++;
    }
    return matheuss;
  }

  excluirConfirmacao(codigo : string) {   
    
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

  deletar(codigo : string) {    
    console.log('mpb deletar código ------> '+codigo)
    var self = this;
    this.spinnerService.display(true); 
    this.matheusService.deletar(codigo)
      .subscribe(data => {    
        if (data != null)
        {
          self.listarTodos();
        }   
        self.spinnerService.display(false);              
      });
  }

  editar(id : String) {    
    this.router.navigate(['../matheus/editar', id]);
  }

}

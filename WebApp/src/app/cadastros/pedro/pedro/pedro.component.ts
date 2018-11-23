import { Component, OnInit, ViewChild } from '@angular/core';
import { PedroService } from '../pedro.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Pedro } from './models/pedro';
import { StringValidation } from '../../../util/string-validation';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-pedro',
  templateUrl: './pedro.component.html',
  styleUrls: ['./pedro.component.scss']
})
export class PedroComponent implements OnInit {

  public displayedColumns = ['actionsColumn','codigo', 'nome', 'idade', 'total'];
  private dataSource: any;
  public palavraChave: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private pedroService: PedroService, 
    private spinnerService: SpinnerService, 
    private dialog: MatDialog, 
    public router: Router) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    var self = this;
    this.spinnerService.display(true);
    this.pedroService.listarTodos()
      .subscribe(response => {
        console.log('mpb retorno do response --->')
        console.log(response);
        if (response != null) {
          this.carregaGridUpperCase(response);
          this.dataSource = new MatTableDataSource<Pedro>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sortingDataAccessor = (data: Pedro, property: string) => {
            switch (property) {
              case 'codigo': return data.codigo;
              case 'nome': return data.nome;
              case 'idade': return data.idade;
              case 'vltotal': return data.total;
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
    this.dataSource.filterPredicate = (data: Pedro, filter: string) =>
      data.nome.indexOf(filter) != -1 ||
      data.idade.toString().indexOf(filter) != -1 || 
      data.total.toString().indexOf(filter) != -1 ||
      data.codigo.toString().indexOf(filter) != -1;
    this.dataSource.filter = filterValue;
  }

  carregaGridUpperCase(pedros: Pedro[]): Pedro[] {
    let num: number = 0;
    while (num <= pedros.length - 1) {
      pedros[num].nome = pedros[num].nome.toUpperCase();
      num++;
    }
    return pedros;
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
    this.pedroService.deletar(codigo)            
      .subscribe(data => {    
        if (data != null)
        {
          self.listarTodos();
        }   
        self.spinnerService.display(false);              
      });
  }

  editar(id : String) {    
    this.router.navigate(['../pedro/editar', id]);
  }

}

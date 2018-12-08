import { Component, OnInit, ViewChild } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { StringValidation } from '../../../util/string-validation';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { Veiculo } from '../models/veiculo';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  public displayedColumns = ['actionsColumn','cd_veiculo', 'nr_placa', 'nr_modelo', 'nr_ano','cd_cor','nr_chassi','nr_passageiros','nr_portas','dtretistro'];
  private dataSource: any;
  public palavraChave: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private veiculoService: VeiculoService, 
    private spinnerService: SpinnerService, 
    private dialog: MatDialog, 
    public router: Router) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    var self = this;
    this.spinnerService.display(true);
    this.veiculoService.listarTodos()
      .subscribe(response => {
        console.log('mpb retorno do response --->')
        console.log(response);
        if (response != null) {
          this.carregaGridUpperCase(response);
          this.dataSource = new MatTableDataSource<Veiculo>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sortingDataAccessor = (data: Veiculo, property: string) => {
            switch (property) {
              case 'codigo': return data.Codigo;
              case 'nr_placa': return data.Nr_placa;
              case 'nr_modelo': return data.Nr_modelo;
              case 'nr_ano': return data.Nr_ano;
              case 'cd_cor': return data.Cd_cor;
              case 'nr_chassi': return data.Nr_chassi;
              case 'nr_passageiros': return data.Nr_passageiros;
              case 'nr_portas': return data.Nr_portas;
              case 'dt_retistro': return data.Dt_registro;
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
    this.dataSource.filterPredicate = (data: Veiculo, filter: string) =>
      data.Nr_ano.toString().indexOf(filter) != -1 ||
      data.Nr_chassi.indexOf(filter) != -1 || 
      data.Codigo.toString().indexOf(filter) != -1 ||
      data.Cd_cor.toString().indexOf(filter) != -1 ||
      data.Nr_modelo.toString().indexOf(filter) != -1 ||
      data.Nr_placa.toString().indexOf(filter) != -1 ||
      data.Nr_passageiros.toString().indexOf(filter) != -1 ||
      data.Nr_portas.toString().indexOf(filter) != -1 ||
      data.Dt_registro.toString().indexOf(filter) != -1;
    this.dataSource.filter = filterValue;
  }

  carregaGridUpperCase(veiculo: Veiculo[]): Veiculo[] {
    let num: number = 0;
    while (num <= veiculo.length - 1) {
      veiculo[num].Nr_chassi = veiculo[num].Nr_chassi.toUpperCase();
      //veiculo[num].Codigo = estados[num].Codigo.toUpperCase();

      num++;
    }
    return veiculo;
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
    this.veiculoService.deletar(codigo)            
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

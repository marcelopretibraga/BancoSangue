import { Component, OnInit, ViewChild } from '@angular/core';
import { CorService } from '../cor.service';
import { Cor } from '../models/cor';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { StringValidation } from '../../../util/string-validation';

@Component({
  selector: 'app-cor',
  templateUrl: './cor.component.html',
  styleUrls: ['./cor.component.css']
})
export class CorComponent implements OnInit {

  public displayedColumns = ['actionsColumn','codigo', 'descricao'];
  private dataSource: any;
  public palavraChave: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private corService: CorService, 
    private spinnerService: SpinnerService, 
    private dialog: MatDialog, 
    public router: Router) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    var self = this;
    this.spinnerService.display(true);
    this.corService.listarTodos()
      .subscribe(response => {
        console.log('mpb retorno do response --->')
        console.log(response);
        if (response != null) {
          this.carregaGridUpperCase(response);
          this.dataSource = new MatTableDataSource<Cor>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sortingDataAccessor = (data: Cor, property: string) => {
            switch (property) {
              case 'codigo': return data.Codigo;
              case 'descricao': return data.Descricao;
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
    this.dataSource.filterPredicate = (data: Cor, filter: string) =>
      data.Descricao.indexOf(filter) != -1 ||
      data.Codigo.toString().indexOf(filter) != -1;
    this.dataSource.filter = filterValue;
  }

  carregaGridUpperCase(cor: Cor[]): Cor[] {
    let num: number = 0;
    while (num <= cor.length - 1) {
      cor[num].Descricao = cor[num].Descricao.toUpperCase();
      cor[num].Codigo = cor[num].Codigo;
      num++;
    }
    return cor;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MunicipioService } from '../../municipio/municipio.service';
import { Municipio } from '../models/municipio';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-municipio-list',
  templateUrl: './municipio-list.component.html',
  styleUrls: ['./municipio-list.component.css']
})
export class MunicipioListComponent implements OnInit {

  @ViewChild(MatPaginator) paginacao: MatPaginator;
  @ViewChild(MatSort) ordenacao: MatSort;
  constructor(private municipioService : MunicipioService,
    private dialog: MatDialog,
    public router: Router ) { }
  //Propriedade responsável por exibir os campos no HTML
  public displayedColumns: any = ['actionsColumn','codigo', 'descricao', 'pib', 'populacao', 'domicilios'];
  public fonteDados: any;
  public palavraChave: string;

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos(){
    this.municipioService.listarTodos()
    .subscribe(retornoBackend => {
      //Atribui os dados no datasource da Table (Fonte de Dados)
      this.fonteDados = new MatTableDataSource<Municipio>(retornoBackend);
      this.fonteDados.paginator = this.paginacao;
      this.fonteDados.sortingDataAccessor = (munic: Municipio, property: string) => {
        switch (property) {
          case 'codigo': return munic.codigo;
          case 'descricao': return munic.descricao;
          case 'domicilios': return munic.domicilios;
          case 'populacao': return munic.populacao;
          case 'pib': return munic.pib;
          default: return '';
        }
      }
      this.fonteDados.sort = this.ordenacao;

      console.log("dados municipio em teste")
      console.log(retornoBackend);
    });
  }

  aplicaFiltro(dadoFiltro: any){
    console.log("chamou o aplicar filtro passando "+dadoFiltro)
    dadoFiltro = dadoFiltro.trim(); // Remove whitespace
    dadoFiltro = dadoFiltro.toUpperCase(); // MatTableDataSource defaults to lowercase matches

    this.palavraChave = dadoFiltro;
    this.fonteDados.filterPredicate = (data: Municipio, filter: string) =>
      data.descricao.toUpperCase().indexOf(filter) != -1 ||
      data.codigo.toString().indexOf(filter) != -1 ||
      data.domicilios.toString().indexOf(filter) != -1 ||
      data.pib.toString().indexOf(filter) != -1 ||
      data.populacao.toString().indexOf(filter) != -1;
    this.fonteDados.filter = dadoFiltro;
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
    this.municipioService.deletar(codigo)
      .subscribe(data => {
        if (data != null)
        {
          self.listarTodos();
        }
      });
  }

  editar(id : String) {
    this.router.navigate(['../municipio/editar', id]);
  }

}

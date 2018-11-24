import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { Luana } from '../models/luana';
import { LuanaService } from '../luana.service';


@Component({
  selector: 'app-luana-list',
  templateUrl: './luana-list.component.html',
  styleUrls: ['./luana-list.component.css']
})
export class LuanaListComponent implements OnInit {

  @ViewChild(MatPaginator) paginacao: MatPaginator;
  @ViewChild(MatSort) ordenacao: MatSort;
  constructor(private luanaService : LuanaService, 
    private dialog: MatDialog, 
    public router: Router ) { }
  //Propriedade responsável por exibir os campos no HTML
  public displayedColumns: any = ['actionsColumn','codigo', 'nome', 'idade', 'total']; 
  public fonteDados: any;
  public palavraChave: string;

  ngOnInit() {
    this.listarTodos();
  }

  
  listarTodos(){
    this.luanaService.listarTodos()
    .subscribe(retornoBackend => {
      //Atribui os dados no datasource da Table (Fonte de Dados)
      this.fonteDados = new MatTableDataSource<Luana>(retornoBackend);
      this.fonteDados.paginator = this.paginacao;
      this.fonteDados.sortingDataAccessor = (l: Luana, property: string) => {
        switch (property) {
          case 'codigo': return l.codigo;
          case 'nome': return l.nome;
          case 'idade': return l.idade;
          case 'total': return l.total;
          default: return '';
        }
      }
      this.fonteDados.sort = this.ordenacao;
      
      console.log("dados luana em teste")
      console.log(retornoBackend);
    });
  }

  aplicaFiltro(dadoFiltro: any){
    console.log("chamou o aplicar filtro passando "+dadoFiltro)
    dadoFiltro = dadoFiltro.trim(); // Remove whitespace
    dadoFiltro = dadoFiltro.toUpperCase(); // MatTableDataSource defaults to lowercase matches

    this.palavraChave = dadoFiltro;
    this.fonteDados.filterPredicate = (data: Luana, filter: string) =>
      data.nome.toUpperCase().indexOf(filter) != -1 ||
      data.codigo.toString().indexOf(filter) != -1 || 
      data.idade.toString().indexOf(filter) != -1 || 
      data.total.toString().indexOf(filter) != -1; 
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

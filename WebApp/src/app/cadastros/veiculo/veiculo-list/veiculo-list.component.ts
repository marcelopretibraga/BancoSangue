import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Veiculo } from '../models/veiculo';
import { VeiculoService } from '../veiculo.service';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.scss']
})
export class VeiculoListComponent implements OnInit {


  @ViewChild(MatPaginator) paginacao: MatPaginator;
  @ViewChild(MatSort) ordenacao: MatSort;
  constructor(private veiculoService: VeiculoService,
    private dialog: MatDialog,
    public router: Router) { }

  public displayedColumns: any = ['actionsColumn', 'codigo', 'placa', 'ano',
  'modelo', 'codigoCor', 'chassi', 'passageiros', 'portas', 'registro'];
  public fonteDados: any;
  public palavraChave: string;

  ngOnInit() {
  }

  listarTodos() {
    this.veiculoService.listarTodos()
    .subscribe(retornoBackend => {
      this.fonteDados = new MatTableDataSource<Veiculo>(retornoBackend);
      this.fonteDados.paginator = this.paginacao;
      this.fonteDados.sortingDataAccessor = (veic: Veiculo, property: string) => {
        switch (property) {
          case 'codigo': return veic.codigo;
          case 'placa': return veic.placa;
          case 'ano': return veic.ano;
          case 'modelo': return veic.modelo;
          case 'codigoCor': return veic.codigoCor;
          case 'chassi': return veic.chassi;
          case 'passageiros': return veic.passageiros;
          case 'portas': return veic.portas;
          case 'registro': return veic.registro;
          default: return '';
        }
      }
      this.fonteDados.sort = this.ordenacao;

      console.log('dados veiculo em teste');
      console.log(retornoBackend);
    });
  }

  aplicaFiltro(dadoFiltro: any) {
    console.log('chamou o aplicar filtro passando ' + dadoFiltro);
    dadoFiltro = dadoFiltro.trim(); // Remove whitespace
    dadoFiltro = dadoFiltro.toUpperCase(); // MatTableDataSource defaults to lowercase matches

    this.palavraChave = dadoFiltro;
    this.fonteDados.filterPredicate = (data: Veiculo, filter: string) =>
      data.placa.toUpperCase().indexOf(filter) != -1 ||
      data.codigo.toString().indexOf(filter) != -1 ||
      data.ano.toString().indexOf(filter) != -1 ||
      data.chassi.toUpperCase().indexOf(filter) != -1 ||
      data.modelo.toString().indexOf(filter) != -1 ||
      data.codigoCor.toString().indexOf(filter) != -1 ||
      data.passageiros.toString().indexOf(filter) != -1 ||
      data.portas.toString().indexOf(filter) != -1 ||
      data.registro.toString().indexOf(filter) != -1;
    this.fonteDados.filter = dadoFiltro;
  }

  excluirConfirmacao(codigo: String) {

    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: 'Confirmar exclusão do registro ?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
        if (isConfirm) {
          this.deletar(codigo);
        }
    });
  }

  deletar(codigo: String) {
    console.log('mpb deletar código ------> ' + codigo);
    var self = this;
    this.veiculoService.deletar(codigo)
      .subscribe(data => {
        if (data != null)
        {
          self.listarTodos();
        }
      });
  }

  editar(id: String) {
    this.router.navigate(['../veiculo/editar', id]);
  }


}

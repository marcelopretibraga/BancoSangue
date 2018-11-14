import { Component, OnInit } from '@angular/core';
import { MunicipioService } from '../../municipio/municipio.service';

@Component({
  selector: 'app-municipio-list',
  templateUrl: './municipio-list.component.html',
  styleUrls: ['./municipio-list.component.css']
})
export class MunicipioListComponent implements OnInit {

  constructor(private municipioService : MunicipioService ) { }

  public displayedColumns :any = ['pib', 'populacao', 'domicilios']; 

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos(){
    this.municipioService.listarTodos()
    .subscribe(retorno => {
      console.log("dados municipio em teste")
      console.log(retorno);
    });
  }

  aplicaFiltro(dado: any){
    console.log("chamou o aplicar filtro passando "+dado)
  }

}

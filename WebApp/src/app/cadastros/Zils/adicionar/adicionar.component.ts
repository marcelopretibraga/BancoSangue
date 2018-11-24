import { Component, OnInit } from '@angular/core';
import { Zils } from '../models/Zils';
import { ZilsService } from '../Zils.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {
  
  private zils: Zils;

  constructor(private zilsService: ZilsService) { }

  ngOnInit() {
    this.zils = new Zils();
  }

  salvar(){
    console.log("Salvando municipio")
    console.log(this.zils)

    this.zilsService.salvar(this.zils)
      .subscribe(retorno => {
        if (retorno != null)
          console.log("Salvou o Municipio")
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { LuanaService } from '../luana.service';
import { Luana } from '../models/luana';

@Component({
  selector: 'app-luana',
  templateUrl: './luana.component.html',
  styleUrls: ['./luana.component.css']
})
export class LuanaComponent implements OnInit {

  private luana: Luana;


  constructor(private luanaService: LuanaService) { }
  
  ngOnInit() {
    this.luana = new Luana();
    
  }


  salvar(){
    console.log("Salvando")
    console.log(this.luana)

    this.luanaService.salvar(this.luana)
      .subscribe(retorno => {
        if (retorno != null)
          console.log("Salvou ")
      });
  }

}


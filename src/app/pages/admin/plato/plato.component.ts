import { Component, OnInit } from '@angular/core';
import { InterfComponent, Platos } from './interf/interf.component';
import { DeclarationListEmitMode } from '@angular/compiler';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {

  listPlatos: Platos[]=[
    
  ]


  
  constructor(private _platosService :InterfComponent){}

  ngOnInit(): void {
    this.getListPlatos();
  }


  getListPlatos(){
    return this._platosService.getListPlatos().subscribe(data => {
      this.listPlatos=data; 
    },error=>{console.log(error)});
  }
  deletePlato(idplato: number ){
    this._platosService.deletePlato(idplato).subscribe(data =>{
      window.location.reload();
    },error=>{console.log(error)});
    
  }

}

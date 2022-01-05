import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfComponent, Reserva } from './interf/interf.component';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  listDire: Reserva[]=[
    
  ]
  constructor(private _platosService :InterfComponent,
    private ruta: Router) { }

  ngOnInit(): void {
    this.getListDir();
  }
  getListDir(){
    return this._platosService.getCuentas().subscribe(data => {
      this.listDire=data;
    },error=>{console.log(error)});
  }
  deletePlato(idplato: number ){
    this._platosService.deletePlato(idplato).subscribe(data =>{
      window.location.reload();
    },error=>{console.log(error)});
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Direccion, InterfComponent } from './interf/interf.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direcenvio',
  templateUrl: './direcenvio.component.html',
  styleUrls: ['./direcenvio.component.css']
})
export class DirecenvioComponent implements OnInit {

  listDire: Direccion[]=[
    
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

}

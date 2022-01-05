import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfComponent, Tarjeta } from './interf/interf.component';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class TarjetaComponent implements OnInit {

  listDire: Tarjeta[]=[
    
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

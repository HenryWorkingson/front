import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta, InterfComponent } from './interf/interf.component';

@Component({
  selector: 'app-adminindex',
  templateUrl: './adminindex.component.html',
  styleUrls: ['./adminindex.component.css']
})
export class AdminindexComponent implements OnInit {

  listCuentas: Cuenta[]=[
    
  ]
  constructor(private _platosService :InterfComponent,
    private ruta: Router) { }

  ngOnInit(): void {
    this.getListCuentas();
  }

  getListCuentas(){
    return this._platosService.getCuentas().subscribe(data => {
      this.listCuentas=data;
    },error=>{console.log(error)});
  }
  
  deleteCuenta(idCuenta: number ){
    this._platosService.deleteCuenta(idCuenta).subscribe(data =>{
      window.location.reload();
    },error=>{console.log(error)});
  }
}

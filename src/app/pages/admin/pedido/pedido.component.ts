import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfComponent, Pedido } from './interf/interf.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  listCuentas: Pedido[]=[
    
  ]
  constructor(private _platosService :InterfComponent,
    private ruta: Router) { }

  ngOnInit(): void {
    this.getListPedidos();
  }

  getListPedidos(){
    return this._platosService.getCuentas().subscribe(data => {
      this.listCuentas=data;
      console.log()
    },error=>{console.log(error)});
  }
  
  deletePedidos(idCuenta: number ){
    this._platosService.deleteCuenta(idCuenta).subscribe(data =>{
      window.location.reload();
    },error=>{console.log(error)});
  }
  async getLineaPedidoService(idCuenta: number){
    
    await  this._platosService.getmoreInfo(idCuenta).subscribe(data => {

      },error=>{console.log(error)});
    }
}

/*
<td style="width: 10%">
                    <button routerLink="/cuenta.id_Pedido" class="btn btn-primary btn-sm float-end"> Details</button>
                </td>


                */
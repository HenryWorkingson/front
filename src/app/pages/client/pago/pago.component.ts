import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import * as printJS from 'print-js'
import { LineaPedido, InterfazComponent } from './interfaz/interfaz.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css','./style.css'],
})
export class PagoComponent implements OnInit {
  total=0;  
  curDate=new Date();
  constructor(private _pedido :TarjetasComponent,
              private _pedidoServicio :InterfazComponent,
              private _router: ActivatedRoute) { 
    
  }
  listLPedido : LineaPedido[]=[];

  ngOnInit(): void {
    this.getLineaPedidoService();
    
  }


  printPage() {
    window.print();
  }
  
  async getLineaPedidoService(){
    
  await  this._pedidoServicio.getLnPedido().subscribe(data => {
      this.listLPedido=data; console.log(this.listLPedido);
      this.findsum(this.listLPedido);
    },error=>{console.log(error)});
  }
  
  findsum(data:LineaPedido[]){  
    data=this.listLPedido;  
    for(let carro of data){   
         this.total+= carro.precioTotal  
    }  
  }  
  
}



//this._pedido.lPedido.get('id_Pedido')?.value;
/*
getLineaPedidoService(){
    return this._pedidoServicio.getLnPedido(1).subscribe(data => {
      this.listLPedido=data;
    },error=>{console.log(error)});
  }


  private datePipe: DatePipe,
          private _pedido :TarjetasComponent,
          private _pedidoServicio :InterfazComponent


          await this._router.queryParams.subscribe(params=>{
      const id_Pedido=params['id'];
      console.log(id_Pedido);
    } )

*/ 
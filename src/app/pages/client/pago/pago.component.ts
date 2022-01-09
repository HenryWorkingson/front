import { DatePipe } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
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
@Injectable({
  providedIn: 'root'
})
export class PagoComponent implements OnInit {
  total=0;  
  curDate=new Date();
  id:any;

  constructor(private _pedidoServicio :InterfazComponent,
              private _router: Router,
              ) { 
    
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
  async getLineaPedService(id: number){
    this.id=id; 
    await this._pedidoServicio.getmoreInfo(id).subscribe(data => {
      this.listLPedido = data;
      console.log(data);
      this.findsum(this.listLPedido);
      console.log(this.total);
      this._router.navigate(['pago']);
    }, error => { console.log(error); });
    console.log(this.total);
  }
     
}
export enum LineP{

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
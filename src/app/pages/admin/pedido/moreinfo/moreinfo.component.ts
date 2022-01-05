import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfComponent, LineaPedido } from '../interf/interf.component';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css','./style.css']
})
export class MoreinfoComponent implements OnInit {
  total=0;  

  listLPedido : LineaPedido[]=[];
  id:any;

  constructor(private _platosService :InterfComponent,
    private ruta: Router,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {

    
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.id = params['parametro'];
      }
    );

    console.log(this.id);
    this.getLineaPedidoService();
  }
  printPage() {
    window.print();
  }
  async getLineaPedidoService(){
    await  this._platosService.getmoreInfo(this.id).subscribe(data => {
      this.listLPedido=data;
      console.log(data);
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

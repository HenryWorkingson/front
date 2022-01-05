import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interf',
  templateUrl: './interf.component.html',
  styleUrls: ['./interf.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class InterfComponent implements OnInit {

  private myAppUrl = 'https://localhost:44318/';
  private myApiUrl = 'Admin/Pedidos';
  private myApiDelete= 'Admin/DeletePedido/';
  private myApiLPUrl ='Admin/LineaPed/';
  constructor(private http:HttpClient){}

  ngOnInit(): void {
  }
  
  getCuentas():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }
  deleteCuenta(id : number): Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiDelete+id);
  }
  getmoreInfo(id : any): Observable<any>{
    console.log(this.myAppUrl+this.myApiLPUrl+id);
    return this.http.get(this.myAppUrl+this.myApiLPUrl+id);
  }

}
export interface Pedido{
  id_Pedido:number;
  descripcion_Pedido:string;
  tarjeta:number;
  id_Direccion:number;
  precio_Total:number;
}
export interface LineaPedido{
  id_LineaPedido: number;  
  nombrePlato: string;
  direccionEnvio: string;
  municipio: string;
  provincia: string;
  cantidad:number;
  precioUnitario:number;
  precioTotal:number;
  descripPlato:string;
}

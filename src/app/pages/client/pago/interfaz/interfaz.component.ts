import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class InterfazComponent implements OnInit {

  private myAppUrl = 'https://localhost:44318/';
  private myApiTarUrl = 'Restaurante/CrearTarjetas/';
  private myApiDirUrl = 'Restaurante/CrearDirecciones/';
  private myApiPedUrl = 'Restaurante/CrearPedido/';
  private myApiLPUrl ='Restaurante/GetLineaPedido/';
  private myApiLPAUrl ='Admin/LineaPed/';
  
  constructor(private http:HttpClient){}

  ngOnInit(): void {
  }
  
  saveTarjetas(tar:DTOTarjeta):Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiTarUrl,tar);
  }
  saveDireccion(dir:DTODireccion):Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiDirUrl,dir);
  }
  savePedido(pedido:DTOPedidos){
    return this.http.post(this.myAppUrl+this.myApiPedUrl,pedido);
  }
  getLnPedido():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiLPUrl);
  }
  getmoreInfo(id : any): Observable<any>{
    console.log(this.myAppUrl+this.myApiLPUrl+id);
    return this.http.get(this.myAppUrl+this.myApiLPAUrl+id);
  }

}


export interface DTOTarjeta{
  Numero_Tarjeta: string;  
  FechaCadu_Tarjeta: string;
  Nom_Propietario:number;
}

export interface DTODireccion{
  Nombre_Direccion: string;  
  Provincia: string;
  Municipal:string;
  DNI_Cliente_Rceiv:string;
  Nombre_Cliente_Rec:string;
  Telefono_Cliente:string;
}

export interface DTOPedidos{
  Descripcion_Pedido:string;
  Tarjeta:number;
  Id_Direccion:number;
  Precio_Total:number;

  Nombre_Direccion: string;  
  Provincia: string;
  Municipal:string;
  DNI_Cliente_Rceiv:string;
  Nombre_Cliente_Rec:string;
  Telefono_Cliente:string;

  Numero_Tarjeta: string;  
  FechaCadu_Tarjeta: string;
  Nom_Propietario:number;
}

export interface Pedido{
  id_Pedido:number;
  Descripcion_Pedido:string;
  Tarjeta:number;
  Id_Direccion:number;
  Precio_Total:number;
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
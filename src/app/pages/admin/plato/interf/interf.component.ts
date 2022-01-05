import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DTOPedidos } from '../../../client/pago/interfaz/interfaz.component';

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
  private myApiUrl = 'Restaurante/Plato/';
  private myApiDelete= 'Admin/DeletePlato/';
  private myCrear='Admin/Plato/createplato';
  constructor(private http:HttpClient){}

  ngOnInit(): void {
  }
  
  getListPlatos(): Observable<any>{
    return this.http.get(this.myAppUrl+ this.myApiUrl);
  }

  deletePlato(id : number): Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiDelete+id);
  }

  savePlato(cuenta:DTOPlatos):Observable<any>{
    console.log(cuenta);
    return this.http.post(this.myAppUrl+this.myCrear,cuenta);
  }
}


export interface Platos{
  idProducto: number;
  nombrePlato: string;
  descripcionPlato: string;  
  precioBase: number;
  tipoPlato:string;
  imagePath:string;
}
export interface DTOPlatos{
  nombrePlato: string;
  descripcionPlato: string;  
  precioBase: number;
  tipoPlato:string;
  imagePath:string;
}
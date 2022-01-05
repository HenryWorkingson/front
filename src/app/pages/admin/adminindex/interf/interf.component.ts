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
  private myApiUrl = 'Admin/Cuentas';
  private myApiDelete= 'Admin/DeleteCuenta/';
  private myCrear='Admin/CrearCuenta';
  constructor(private http:HttpClient){}

  ngOnInit(): void {
  }
  
  getCuentas():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }
  deleteCuenta(id : number): Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiDelete+id);
  }

  saveCuenta(cuenta:DTOCuenta):Observable<any>{
    console.log(cuenta);
    return this.http.post(this.myAppUrl+this.myCrear,cuenta);
  }
}


export interface Cuenta{
  id_Cuenta:number;  
  nombre_Cuenta: string;
  apellido_Cuenta: string;
  password_Cuenta:string;
  correo_Cuenta:string;  
}
export interface DTOCuenta{
  Nombre_Cuenta: string;
  Apellido_Cuenta: string;
  Password_Cuenta:string;
  Correo_Cuenta:string;  
}
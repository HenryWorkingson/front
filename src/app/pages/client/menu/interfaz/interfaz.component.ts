import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
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
  private myApiUrl = 'Restaurante/Plato/';
  private addcarro='Restaurante/AddCarro/';

  
  constructor(private http:HttpClient){}
  ngOnInit(): void {
  }

  getListPlatos(): Observable<any>{
    return this.http.get(this.myAppUrl+ this.myApiUrl);
  }

  addCarro(idProducto : any): Observable<any>{
    return this.http.put(this.myAppUrl+this.addcarro+idProducto,idProducto);
  }

}

export interface Platos{
  idProducto?: number;
  nombrePlato: string;
  descripcionPlato: string;  
  precioBase: number;
  tipoPlato:string;
  imagePath:string;

}



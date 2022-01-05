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
  private myApiUrl = 'Restaurante/Carro/';

  constructor(private http:HttpClient){}
  ngOnInit(): void {
  }
  
  getListCarro(): Observable<any>{
    return this.http.get(this.myAppUrl+ this.myApiUrl);
  }
  
  AumentarCarro(id : any): Observable<any>{
    return this.http.put(this.myAppUrl+'Restaurante/AumentarCarro/'+id,id);
  }
  RestarCarro(id : any): Observable<any>{
    return this.http.put(this.myAppUrl+'Restaurante/DecrementarCarro/'+id,id);
  }
  DeleteCarro(id : any): Observable<any>{
    return this.http.delete(this.myAppUrl+'Restaurante/DeleteCarro/'+id);
  }

}

export interface Carro{
  idLPedido?: number;
  idPlato: number;
  nombreProducto: string;  
  cantidad: number;
  precioProductoUnitario:number;
  precioTotal:number;

  
}

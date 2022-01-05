import { Time } from '@angular/common';
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
  private myApiUrl = 'Restaurante/CrearReserva';

  constructor(private http:HttpClient){}

  ngOnInit(): void {
  }
  
  saveBook(Reserva:DTOReserva):Observable<any>{
    console.log(Reserva);
    return this.http.post(this.myAppUrl+this.myApiUrl,Reserva);
  }

}


export interface DTOReserva{
  reservaNombre: string;
  numeroPersonas:number;  
  reservaTelefono: string;
  reservaDate:string;
  reservaTime:string;  
}
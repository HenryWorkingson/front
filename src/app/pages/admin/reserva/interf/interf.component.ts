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
  private myApiUrl = 'Admin/Reserva';
  private myApiDelete='Admin/DeleteReserva/';

  constructor(private http:HttpClient){}

  ngOnInit(): void {
  }
  
  getCuentas():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }
  deletePlato(id : number): Observable<any>{
    console.log(id);
    return this.http.delete(this.myAppUrl+this.myApiDelete+id);
  }

}
export interface Reserva{
  idReserva:number;
  reservaNombre:string;
  numeroPersonas:number;
  reservaTelefono :string;
  reservaDate:string;
  reservaTime:string;
}
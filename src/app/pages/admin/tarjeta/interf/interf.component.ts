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
  private myApiUrl = 'Admin/Tarjetas';

  constructor(private http:HttpClient){}

  ngOnInit(): void {
  }
  
  getCuentas():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }

}
export interface Tarjeta{
  id_Tarjeta:number;
  numero_Tarjeta:string;
  fechaCadu_Tarjeta :string;
  nom_Propietario:string;
}
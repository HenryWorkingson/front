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



  ngOnInit(): void {
  }
  private myAppUrl = 'https://localhost:44318/';
  private myApiUrl ='Restaurante/LogIn/';
  constructor(private http:HttpClient){}


  login(user:DTOUser):Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl,user);
  }

}
export interface DTOUser{
  Correo_Cuenta:string;
  Password_Cuenta:string;
}
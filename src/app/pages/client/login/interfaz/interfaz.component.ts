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
  private myApiUrl = 'Restaurante/LogIn';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  login(u:DTOUser):Observable<any>{
    console.log(u);
    return this.http.post(this.myAppUrl+this.myApiUrl,u);
    //return this.http.post(this.myAppUrl+this.myApiUrl,book);
  }
}
export interface DTOUser{
  Correo_Cuenta:string;
  Password_Cuenta:string;
}

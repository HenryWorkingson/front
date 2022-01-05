import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private myAppUrl = 'https://localhost:44318/';
  private myApiUrl = 'Restaurante/Plato/';

  
  constructor(private http:HttpClient){}
  ngOnInit(): void {
  }

  getListPlatos(): Observable<any>{
    return this.http.get(this.myAppUrl+ this.myApiUrl);
  }
}

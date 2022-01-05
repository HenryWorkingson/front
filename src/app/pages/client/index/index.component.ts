import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private myAppUrl = 'https://localhost:44318/';
  private myApiUrl = 'Restaurante/Index/';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getListComentarios() : Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }
}

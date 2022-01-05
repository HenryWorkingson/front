import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Platos } from 'src/app/pages/client/platos/interfaz/Platos';
import { ServicioService } from './servicio.service';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  listPlatos: Platos[]=[
    
  ]


  
  constructor(private _platosService :ServicioService){}

  ngOnInit(): void {
    this.getListPlatos();
  }


  getListPlatos(){
    return this._platosService.getListPlatos().subscribe(data => {
      this.listPlatos=data; 
    },error=>{console.log(error)});
  }

}

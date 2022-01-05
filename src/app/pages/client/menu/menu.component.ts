import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { InterfazComponent } from './interfaz/interfaz.component';
import { Platos } from './interfaz/interfaz.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listPlatos: Platos[]=[
    
  ]

  constructor(private _platosService :InterfazComponent,
              private addcarro:InterfazComponent,
              private ruta: Router){}

  ngOnInit(): void {
    this.getListPlatos();
  }



  getListPlatos(){
    return this._platosService.getListPlatos().subscribe(data => {
      this.listPlatos=data;
    },error=>{console.log(error)});

     
  }
  
  addCarro(idProducto: any ){
    this._platosService.addCarro(idProducto).subscribe(data =>{
    });
    window.location.reload();
  }
}
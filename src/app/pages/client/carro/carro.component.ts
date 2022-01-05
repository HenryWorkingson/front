import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro, InterfazComponent } from './interfaz/interfaz.component';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  users:any  
  total=0;    
  listCarro: Carro[]=[
    
  ]

  constructor(private carroService :InterfazComponent,
              private ruta: Router){}

  ngOnInit(): void {
    this.getListCarro();
  }



  getListCarro(){
    return this.carroService.getListCarro().subscribe(data => {
      this.listCarro=data;
      this.findsum(this.listCarro);
    },error=>{console.log("aqui da error")});

     
  }
  
  AumentarCarro(id: any ){
    this.carroService.AumentarCarro(id).subscribe(data =>{
    });
    window.location.reload();
  }
  RestarCarro(id: any ){
    this.carroService.RestarCarro(id).subscribe(data =>{
    });
    window.location.reload();
  }
  DeleteCarro(id : any){
    this.carroService.DeleteCarro(id).subscribe(data =>{
    });
    window.location.reload();
  }

  findsum(data:Carro[]){    
    for(let carro of data){   
         this.total+= carro.precioTotal  
    }  
  }  

}



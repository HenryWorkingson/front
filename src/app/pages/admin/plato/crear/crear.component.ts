import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InterfComponent, DTOPlatos } from '../interf/interf.component';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  agregarPlato: FormGroup;
  constructor(private fb: FormBuilder,
        private _platoService:InterfComponent,
        private _router:Router) 
    {
      
      this.agregarPlato=  this.fb.group({
        nombrePlato: ['',Validators.required],  
        descripcionPlato: ['',Validators.required],
        precioBase:['',Validators.required],
        tipoPlato:['',Validators.required],
        imagePath:['',Validators.required],
      })

    }
  ngOnInit(): void {
    
  }

  agregarP(){
    const plato: DTOPlatos={
      nombrePlato: this.agregarPlato.get('nombrePlato')?.value, 
      descripcionPlato: this.agregarPlato.get('descripcionPlato')?.value,   
      precioBase: this.agregarPlato.get('precioBase')?.value, 
      tipoPlato:this.agregarPlato.get('tipoPlato')?.value, 
      imagePath: 'assets/images/'+this.agregarPlato.get('imagePath')?.value, 
    }

    
    this._platoService.savePlato(plato).subscribe(data => {
        this._router.navigate(['admin/platos']);
    },error=>{console.log(error);}

    )};
    
  }

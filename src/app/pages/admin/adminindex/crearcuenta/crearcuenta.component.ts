import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterfComponent, DTOCuenta } from '../interf/interf.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearcuentaComponent implements OnInit {

  agregarCuenta: FormGroup;
  constructor(private fb: FormBuilder,
        private _cuentaService:InterfComponent,
        private _router:Router) 
    {
      
      this.agregarCuenta=  this.fb.group({
        Nombre_Cuenta: ['',Validators.required],  
        Apellido_Cuenta: ['',Validators.required],
        Password_Cuenta:['',Validators.required],
        Correo_Cuenta:['',Validators.required],
      })

    }
  ngOnInit(): void {
    
  }

  agregarCuen(){
    const cuenta: DTOCuenta={
      Nombre_Cuenta: this.agregarCuenta.get('Nombre_Cuenta')?.value,  
      Apellido_Cuenta: this.agregarCuenta.get('Apellido_Cuenta')?.value,  
      Password_Cuenta: this.agregarCuenta.get('Password_Cuenta')?.value,
      Correo_Cuenta:this.agregarCuenta.get('Correo_Cuenta')?.value,
      
    }
    
    this._cuentaService.saveCuenta(cuenta).subscribe(data => {
        this._router.navigate(['admin/index']);
    },error=>{console.log(error);}
    )};
    
  }
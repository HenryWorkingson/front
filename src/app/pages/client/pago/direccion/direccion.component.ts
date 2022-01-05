import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InterfazComponent, DTODireccion } from '../interfaz/interfaz.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  toastr: any;
  agregarDireccion: FormGroup;
  constructor(private fb: FormBuilder,
        private _DirService:InterfazComponent,
        private _router:Router) 
    {
      this.agregarDireccion=  this.fb.group({
        Nombre_Direccion: ['',Validators.required],  
        Provincia: ['',Validators.required],
        Municipal:['',Validators.required],
        DNI_Cliente_Rceiv:['',Validators.required],
        Nombre_Cliente_Rec:['',Validators.required],
        Telefono_Cliente:['',Validators.required],
      })

    }
  ngOnInit(): void {
    
  }

  agregarD(){
    const direc:DTODireccion={  
      Nombre_Direccion: this.agregarDireccion.get('Nombre_Direccion')?.value,  
      Provincia: this.agregarDireccion.get('Provincia')?.value,
      Municipal:this.agregarDireccion.get('Municipal')?.value,
      DNI_Cliente_Rceiv:this.agregarDireccion.get('DNI_Cliente_Rceiv')?.value,
      Nombre_Cliente_Rec:this.agregarDireccion.get('Nombre_Cliente_Rec')?.value,
      Telefono_Cliente:this.agregarDireccion.get('Telefono_Cliente')?.value,
    }
    
    this._DirService.saveDireccion(direc).subscribe(data => {
      this.toastr.success('La reserva fue registrado con exito', 'Reserva registrado');
      this._router.navigate(['']);
    }, error=>{console.log(error);
    });
    
  }

}

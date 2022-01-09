import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InterfazComponent, DTOTarjeta, DTOPedidos, Pedido, LineaPedido } from '../interfaz/interfaz.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PagoComponent } from '../pago.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class TarjetasComponent implements OnInit {

  lPedido :any;
  id: any;
  toastr: any;
  agregarTarjeta: FormGroup;
  agregarPedido: FormGroup;
  constructor(private fb: FormBuilder,
        private _TarService:InterfazComponent,
        private _router:Router,
        private http:HttpClient,
        private pago:PagoComponent) 
    {
      this.agregarTarjeta=  this.fb.group({
        Numero_Tarjeta: ['',Validators.required],  
        FechaCadu_Tarjeta: ['',Validators.required],
        Nom_Propietario:['',Validators.required],
      }),
      this.agregarPedido= this.fb.group({
        Descripcion_Pedido:['',Validators.required],
        Tarjeta:['',Validators.required],
        Id_Direccion:['',Validators.required],
        Precio_Total:['',Validators.required],
        Nombre_Direccion: ['',Validators.required], 
        Provincia: ['',Validators.required],
        Municipal:['',Validators.required],
        DNI_Cliente_Rceiv:['',Validators.required],
        Nombre_Cliente_Rec:['',Validators.required],
        Telefono_Cliente:['',Validators.required],

        Numero_Tarjeta: ['',Validators.required], 
        FechaCadu_Tarjeta: ['',Validators.required],
        Nom_Propietario:['',Validators.required],
      })


    }
  ngOnInit(): void {
  }

  agregarT(){
    const tarjeta:DTOTarjeta={  
      Numero_Tarjeta: this.agregarTarjeta.get('Numero_Tarjeta')?.value,  
      FechaCadu_Tarjeta: this.agregarTarjeta.get('FechaCadu_Tarjeta')?.value,
      Nom_Propietario:this.agregarTarjeta.get('Nom_Propietario')?.value,
      
    }
    console.log(tarjeta);
    this._TarService.saveTarjetas(tarjeta).subscribe(data => {
      this.toastr.success('La reserva fue registrado con exito', 'Reserva registrado');
    }, error=>{console.log(error);
    });
    
  }
  async generarPedido(){
    const pedi:DTOPedidos={  
      Numero_Tarjeta: this.agregarPedido.get('Numero_Tarjeta')?.value,  
      FechaCadu_Tarjeta: this.agregarPedido.get('FechaCadu_Tarjeta')?.value,
      Nom_Propietario:this.agregarPedido.get('Nom_Propietario')?.value,

      Nombre_Direccion: this.agregarPedido.get('Nombre_Direccion')?.value,  
      Provincia: this.agregarPedido.get('Provincia')?.value,
      Municipal:this.agregarPedido.get('Municipal')?.value,
      DNI_Cliente_Rceiv:this.agregarPedido.get('DNI_Cliente_Rceiv')?.value,
      Nombre_Cliente_Rec:this.agregarPedido.get('Nombre_Cliente_Rec')?.value,
      Telefono_Cliente:this.agregarPedido.get('Telefono_Cliente')?.value,

      Descripcion_Pedido: this.agregarPedido.get('Descripcion_Pedido')?.value,  
      Tarjeta:0,
      Id_Direccion:0,
      Precio_Total:0,
    }
    console.log(pedi);
    await this._TarService.savePedido(pedi).subscribe((data) => {
      this.lPedido=data;
      console.log(this.lPedido);
      this.get(this.lPedido);
    }, error=>{console.log(error);
    });
    
  }
  get(pedido: Pedido){
    this._router.navigate(['pago']);
    console.log(pedido.id_Pedido);
    this.pago.getLineaPedService(pedido.id_Pedido);
  }
}

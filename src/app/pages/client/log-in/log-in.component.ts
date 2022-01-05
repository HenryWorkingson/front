import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DTOUser, InterfazComponent } from './interfaz/interfaz.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LogInComponent implements OnInit {

  public agregarL: FormGroup;
  constructor(private fb: FormBuilder,
    private _router:Router,
    private _userServe:InterfazComponent) { 

    this.agregarL=  this.fb.group({
      Correo_Cuenta: ['',Validators],  
      Password_Cuenta: ['',Validators],
    })

  }

  ngOnInit(): void {
  }
  agregarLog(){
    const direc:DTOUser={  
      Correo_Cuenta: this.agregarL.get('Correo_Cuenta')?.value,  
      Password_Cuenta: this.agregarL.get('Password_Cuenta')?.value,
    }
    
    this._userServe.login(direc).subscribe(data => {
      this._router.navigate(['']);
    }, error=>{console.log(error);
    });
    
  }

}

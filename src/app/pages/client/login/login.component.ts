import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterfazComponent, DTOUser } from './interfaz/interfaz.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  agregarLog: FormGroup;
  
  constructor(private fb: FormBuilder,
              private _LogService:InterfazComponent,
              private _router:Router) { 
          
                this.agregarLog=  this.fb.group({
                  Password_Cuenta: ['',Validators.required],  
                  Correo_Cuenta: ['',Validators.required],
                  
                })
    }

  ngOnInit(): void {
  }

  logIN(){
    const direc:DTOUser={  
      Password_Cuenta: this.agregarLog.get('Password_Cuenta')?.value,  
      Correo_Cuenta: this.agregarLog.get('Correo_Cuenta')?.value,
    };
    console.log(direc);
    this._LogService.login(direc).subscribe(data => {
      this._router.navigate(['admin/index']);
    }, error=>{console.log(error);
      
    });
  }
 
}

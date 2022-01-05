import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup ,ReactiveFormsModule } from '@angular/forms';
import { InterfazComponent, DTOReserva } from './interfaz/interfaz.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  
  toastr: any;
  today =  new Date();
  tomorrow =  new Date(this.today.setDate(this.today.getDate() + 1));
  
  
  agregarBook: FormGroup;
  constructor(private fb: FormBuilder,
        private _bookService:InterfazComponent) 
    {
      
      this.agregarBook=  this.fb.group({
        reservaNombre: ['',Validators.required],  
        reservaTelefono: ['',Validators.required],
        reservaDate:['',Validators.required],
        reservaTime:['',Validators.required],
        numeroPersonas:['',Validators.required],
      })

    }
  ngOnInit(): void {
    
  }

  agregar(){
    const book:DTOReserva={  
      reservaNombre: this.agregarBook.get('reservaNombre')?.value,  
      reservaTelefono: this.agregarBook.get('reservaTelefono')?.value,
      numeroPersonas:this.agregarBook.get('numeroPersonas')?.value,
      reservaDate:this.agregarBook.get('reservaDate')?.value,
      reservaTime:this.agregarBook.get('reservaTime')?.value,
      
    }
    
    this._bookService.saveBook(book).subscribe(data => {
      window.location.reload();
    },error=>{console.log(error)});
    
  }

}

//<input formControlName="reservaDate" type="time" class="form-control">
/*
<select formControlName="reservaTime" type= "time"class="form-control nice-select wide" id="reservaTime">
                  <option value="" disabled selected>
                    La Hora
                  </option>
                  <option value="">
                    10:00
                  </option>
                  <option value="">
                    11:00
                  </option>
                  <option value="">
                    12:00
                  </option>
                  <option value="">
                    13:00
                  </option>
                  <option value="">
                    14:00
                  </option>
                  <option value="">
                    15:00
                  </option>
                  <option value="">
                    16:00
                  </option>
                  <option value="">
                    17:00
                  </option>
                  <option value="">
                    18:00
                  </option>
                  <option value="">
                    19:00
                  </option>
                  <option value="">
                    20:00
                  </option>
                  <option value="">
                    21:00
                  </option>
                </select>*/
/*
                <div>
                
                <input formControlName="reservaTelefono" type="text" class="form-control" id="reservaTelefono" placeholder="Numero de Telefono" />
                <span class="text-danger" *ngIf="agregarBook.get('reservaTelefono')?.invalid && agregarBook.get('reservaTelefono')?.touched">
                  El <strong>Telefono</strong> es requerido
                </span>
              </div>    -*/
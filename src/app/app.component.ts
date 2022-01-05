import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tfg';
  mytodos = [
    {
      item:'need to buy movie tickets',
      isCompleted:false
    },
    {
      item:'Gardening tomorrow 9:00AM',
      isCompleted:false
    },
    {
      item:'Car Washing',
      isCompleted:true
    },
    {
      item:'Buy a pen',
      isCompleted:false
    }
  ]
}

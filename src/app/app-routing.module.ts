import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/client/about/about.component';
import { BookComponent } from './pages/client/book/book.component';
import { IndexComponent } from './pages/client/index/index.component';
import { MenuComponent } from './pages/client/menu/menu.component';
import { LoginComponent } from './pages/client/login/login.component';
import { CarroComponent } from './pages/client/carro/carro.component';
import { TarjetasComponent } from './pages/client/pago/tarjetas/tarjetas.component';
import { DireccionComponent } from './pages/client/pago/direccion/direccion.component';
import { PagoComponent } from './pages/client/pago/pago.component';
import { AdminindexComponent } from './pages/admin/adminindex/adminindex.component';
import { CrearcuentaComponent } from './pages/admin/adminindex/crearcuenta/crearcuenta.component';
import { PlatoComponent } from './pages/admin/plato/plato.component';
import { CrearComponent } from './pages/admin/plato/crear/crear.component';
import { PedidoComponent } from './pages/admin/pedido/pedido.component';
import { DirecenvioComponent } from './pages/admin/direcenvio/direcenvio.component';
import { TarjetaComponent } from './pages/admin/tarjeta/tarjeta.component';
import { ReservaComponent } from './pages/admin/reserva/reserva.component';
import { MoreinfoComponent } from './pages/admin/pedido/moreinfo/moreinfo.component';
import { EnviadoComponent } from './pages/client/book/enviado/enviado.component';

var path='http://localhost:4200'
const routes: Routes = [
  {path: '',component:IndexComponent},
  {path: 'about',component:AboutComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'book',component:BookComponent},
  {path: 'login',component:LoginComponent},
  {path: 'carro',component:CarroComponent},
  {path: 'tarjeta', component:TarjetasComponent},
  {path: 'direccion', component:DireccionComponent},
  {path: 'pago', component:PagoComponent},
  {path: 'pago/:id', component:PagoComponent},
  {path: 'admin/index',component:AdminindexComponent},
  {path: 'login/admin/index',redirectTo:'admin/index'},
  {path: 'admin/crearcuenta', component:CrearcuentaComponent},
  {path: 'admin/platos', component :PlatoComponent},
  {path: 'admin/crearplatos',component: CrearComponent},
  {path: 'admin/pedidos',component:PedidoComponent},
  {path: 'admin/direccion', component:DirecenvioComponent},
  {path: 'admin/tarjeta', component:TarjetaComponent},
  {path: 'admin/reserva', component:ReservaComponent},
  {path: 'admin/pedidos/:parametro', component:MoreinfoComponent},
  {path: 'enviado', component:EnviadoComponent},

  {path: 'admin/index/admin/crearcuenta',redirectTo:'admin/crearcuenta'},
  {path: 'about/about', redirectTo:'about'},
  {path: 'about/book', redirectTo:'book'},
  {path: 'about/menu',redirectTo:'menu'},
  {path: 'about/login', redirectTo:'login'},
  {path: 'about/carro', redirectTo:'carro'},
  {path: 'menu/about', redirectTo:'about'},
  {path: 'menu/book', redirectTo:'book'},
  {path: 'menu/menu',redirectTo:'menu'},
  {path: 'menu/login', redirectTo:'login'},
  {path: 'menu/carro', redirectTo:'carro'},
  {path: 'book/about', redirectTo:'about'},
  {path: 'book/book', redirectTo:'book'},
  {path: 'book/menu',redirectTo:'menu'},
  {path: 'book/login', redirectTo:'login'},
  {path: 'book/carro', redirectTo:'carro'},
  {path: 'carro/about', redirectTo:'about'},
  {path: 'carro/book', redirectTo:'book'},
  {path: 'carro/menu',redirectTo:'menu'},
  {path: 'carro/login', redirectTo:'login'},
  {path: 'carro/carro', redirectTo:'carro'},
  {path: 'carro/direccion', redirectTo:'direccion'},
  {path: 'carro/tarjeta', redirectTo:'tarjeta'},
  
  {path: 'direccion/about', redirectTo:'about'},
  {path: 'direccion/book', redirectTo:'book'},
  {path: 'direccion/menu',redirectTo:'menu'},
  {path: 'direccion/login', redirectTo:'login'},
  {path: 'direccion/carro', redirectTo:'carro'},
  {path: 'direccion/tarjeta', redirectTo:'tarjeta'},
  {path: 'tarjeta/pago', redirectTo:'pago'},
  {path: 'tarjeta/about', redirectTo:'about'},
  {path: 'tarjeta/book', redirectTo:'book'},
  {path: 'tarjeta/menu',redirectTo:'menu'},
  {path: 'tarjeta/login', redirectTo:'login'},
  {path: 'tarjeta/carro', redirectTo:'carro'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

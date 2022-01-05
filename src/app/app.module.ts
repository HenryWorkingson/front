import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

//Componentes de paginas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './pages/client/index/index.component';
import { AboutComponent } from './pages/client/about/about.component';
import { MenuComponent } from './pages/client/menu/menu.component';
import { BookComponent } from './pages/client/book/book.component';
import { PlatosComponent } from './pages/client/platos/platos.component';
import { ComponentesPlatoComponent } from './pages/client/platos/componentes-plato/componentes-plato.component';
import { LoginComponent } from './pages/client/login/login.component';
import { CarroComponent } from './pages/client/carro/carro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterfazComponent } from './pages/client/menu/interfaz/interfaz.component';
import { PagoComponent } from './pages/client/pago/pago.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TarjetasComponent } from './pages/client/pago/tarjetas/tarjetas.component';
import { DireccionComponent } from './pages/client/pago/direccion/direccion.component';
import { NgxPrintModule } from 'ngx-print';
import { LogInComponent } from './pages/client/log-in/log-in.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { AdminindexComponent } from './pages/admin/adminindex/adminindex.component';
import { HeaderadminComponent } from './pages/admin/headeradmin/headeradmin.component';
import { InterfComponent } from './pages/admin/adminindex/interf/interf.component';
import { CrearcuentaComponent } from './pages/admin/adminindex/crearcuenta/crearcuenta.component';
import { PlatoComponent } from './pages/admin/plato/plato.component';
import { CrearComponent } from './pages/admin/plato/crear/crear.component';
import { PedidoComponent } from './pages/admin/pedido/pedido.component';
import { MoreinfoComponent } from './pages/admin/pedido/moreinfo/moreinfo.component';
import { TarjetaComponent } from './pages/admin/tarjeta/tarjeta.component';
import { ReservaComponent } from './pages/admin/reserva/reserva.component';
import { DirecenvioComponent } from './pages/admin/direcenvio/direcenvio.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AboutComponent,
    MenuComponent,
    BookComponent,
    PlatosComponent,
    ComponentesPlatoComponent,
    LoginComponent,
    CarroComponent,
    InterfazComponent,
    PagoComponent,
    TarjetasComponent,
    DireccionComponent,
    LogInComponent,
    LogoutComponent,
    AdminindexComponent,
    HeaderadminComponent,
    InterfComponent,
    CrearcuentaComponent,
    PlatoComponent,
    CrearComponent,
    PedidoComponent,
    MoreinfoComponent,
    TarjetaComponent,
    ReservaComponent,
    DirecenvioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule,
    BrowserModule,
    NgxPrintModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

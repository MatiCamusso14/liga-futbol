import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EquiposTablaComponent } from './components/equipos-tabla/equipos-tabla.component';
import { LoginComponent } from './components/login/login.component';
import { ComprobarSancionadosComponent } from './components/comprobar-sancionados/comprobar-sancionados.component';
import { SancionadosTablaComponent } from './components/sancionados-tabla/sancionados-tabla.component';
import { JugadoresTablaComponent } from './components/jugadores-tabla/jugadores-tabla.component';
import { EquiposCrearComponent } from './components/equipos-crear/equipos-crear.component';
import { JugadoresCrearComponent } from './components/jugadores-crear/jugadores-crear.component';
import { ConfirmarEliminarComponent } from './components/dialogos/confirmar-eliminar/confirmar-eliminar.component';
import { JugadoresEditarComponent } from './components/jugadores-editar/jugadores-editar.component';
import { EquiposEditarComponent } from './components/equipos-editar/equipos-editar.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/configuration/config.service';
import { LoginIncorrectoComponent } from './components/snack-bar/login-incorrecto/login-incorrecto.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import * as firebase from '../../node_modules/firebase';
import 'firebase/storage';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { ExpulsarJugadorComponent } from './components/dialogos/expulsar-jugador/expulsar-jugador.component';
firebase.default.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    EquiposTablaComponent,
    LoginComponent,
    ComprobarSancionadosComponent,
    SancionadosTablaComponent,
    JugadoresTablaComponent,
    EquiposCrearComponent,
    JugadoresCrearComponent,
    ConfirmarEliminarComponent,
    JugadoresEditarComponent,
    EquiposEditarComponent,
    LoginIncorrectoComponent,
    ExpulsarJugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireStorageModule,
  ],
  providers: [
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

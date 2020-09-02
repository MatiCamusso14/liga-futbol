import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    JugadoresCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

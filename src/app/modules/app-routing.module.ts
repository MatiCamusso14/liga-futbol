import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from '../components/main-nav/main-nav.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuardService } from '../services/auth/auth-guard.service';
import { LoginComponent } from '../components/login/login.component';
import { EquiposTablaComponent } from '../components/equipos-tabla/equipos-tabla.component';
import { ComprobarSancionadosComponent } from '../components/comprobar-sancionados/comprobar-sancionados.component';
import { SancionadosTablaComponent } from '../components/sancionados-tabla/sancionados-tabla.component';
import { JugadoresTablaComponent } from '../components/jugadores-tabla/jugadores-tabla.component';
import { EquiposCrearComponent } from '../components/equipos-crear/equipos-crear.component';
import { JugadoresCrearComponent } from '../components/jugadores-crear/jugadores-crear.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: { title: 'Loguear usuario' },
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
    data: { title: 'Loguear usuario' },
  },
  {
    path: 'main',
    component: MainNavComponent,
    data: { title: 'main' },
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'home' },
        canActivate: [AuthGuardService]
      },
      {
        path: 'equipos-tabla',
        component: EquiposTablaComponent,
        data: { title: 'home' },
        canActivate: [AuthGuardService]
      },
      {
        path: 'sancionados-tabla',
        component: SancionadosTablaComponent,
        data: { title: 'home' },
        canActivate: [AuthGuardService]
      },
      {
        path: 'comprobar-sancionados',
        component: ComprobarSancionadosComponent,
        data: { title: 'home' },
        canActivate: [AuthGuardService]
      },
      {
        path: 'jugadores-tabla/:equipo',
        component: JugadoresTablaComponent,
        data: { title: 'home' },
        canActivate: [AuthGuardService]
      },
      {
        path: 'equipos-crear',
        component: EquiposCrearComponent,
        data: { title: 'home' },
        canActivate: [AuthGuardService]
      },
      {
        path: 'jugadores-crear/:equipo',
        component: JugadoresCrearComponent,
        data: { title: 'home' },
        canActivate: [AuthGuardService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

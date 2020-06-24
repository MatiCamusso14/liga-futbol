import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  isHandset$;
  fondo = 'white';

  @HostBinding('class') activeThemeCssClass: string;
  isThemeDark = false;
  activeTheme: string;
  activeFormat: string;
  themes: string[] = [
    'deeppurple-amber',
    'indigo-pink',
    'pink-bluegrey',
    'purple-green',
  ];

  constructor(private router: Router) {
   }

  irAPersonalizar() {
    this.router.navigate(['main/personalizar-usuario'])
  }

  sombra() {
    if (JSON.parse(localStorage.getItem('colorFondo'))) {
      return '3px 0 6px rgba(255, 255, 255, 0.658)';
    } else if (!JSON.parse(localStorage.getItem('colorFondo'))) {
      return '3px 0 6px rgba(0, 0, 0, 0.658)';
    }
  }

  irAEquipos() {
    this.router.navigate(['main/equipos-tabla']);
  }

  irASancionados() {
    this.router.navigate(['main/sancionados-tabla']);
  }

  comprobarSancionados() {
    this.router.navigate(['main/comprobar-sancionados']);
  }

  toHome() {
    this.router.navigate(['main/home']);
  }

  logOut() {
    this.router.navigate(['login']);
  }

  colores() {
    if (!JSON.parse(localStorage.getItem('colorFondo'))) {
      return '#303030';
    } else if (JSON.parse(localStorage.getItem('colorFondo'))) {
      return '#fafafa';
    }
  }

  ngOnInit(): void {
  }

}

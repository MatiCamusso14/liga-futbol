import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  colores() {
    if (!JSON.parse(localStorage.getItem('colorFondo'))) {
      return '#000000';
    } else if (JSON.parse(localStorage.getItem('colorFondo'))) {
      return '#fafafa';
    }
  }


  coloresHome() {
    if (JSON.parse(localStorage.getItem('colorFondo'))) {
      return true;
    } else if (!JSON.parse(localStorage.getItem('colorFondo'))) {
      return false;
    }
  }

  irALocatarios() {
    this.router.navigate(['main/locatarios-tabla']);
  }

  irALocadores() {
    this.router.navigate(['main/locadores-tabla']);
  }

  irAInmuebles() {
    this.router.navigate(['main/inmuebles-tabla']);
  }

  irAServicios() {
    this.router.navigate(['main/servicios-tabla']);
  }

  irARecibos() {
    this.router.navigate(['main/recibos-tabla']);
  }

  ngOnInit(): void {
  }

}

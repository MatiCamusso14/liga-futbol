import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  irAEquipos() {
    this.router.navigate(['main/equipos-tabla']);
  }
  
  irASancionados() {
    this.router.navigate(['main/sancionados-tabla']);
  }

  comprobarSancionados() {
    this.router.navigate(['main/comprobar-sancionados']);
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-comprobar-sancionados',
  templateUrl: './comprobar-sancionados.component.html',
  styleUrls: ['./comprobar-sancionados.component.css']
})
export class ComprobarSancionadosComponent implements OnInit {

  constructor(private equiposService: EquiposService) { }

  equipoSeleccionado;
  listaEquipos = [];
  cargaPendientes = true;

  leerFoto() {
    
  }

  async cargarTabla() {
    this.listaEquipos = await this.equiposService.get();
    this.cargaPendientes = false;
  }

  ngOnInit(): void {
    this.cargarTabla();
  }

}

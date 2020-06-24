import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Jugador } from 'src/app/interfaces/jugador';

@Component({
  selector: 'app-sancionados-tabla',
  templateUrl: './sancionados-tabla.component.html',
  styleUrls: ['./sancionados-tabla.component.css']
})
export class SancionadosTablaComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }
  cargaPendientes = true;
  displayedColumns = ['nombre', 'equipo' ,'acciones'];
  dataSource = new MatTableDataSource<Jugador>();
  tablaJugadores = [
    { nombre: 'Juan Fernando Quintero', equipo:'River'},
    { nombre: 'Milton Casco', equipo:'River'},
    { nombre: 'Darío Cvitanich', equipo:'Racing'},
    { nombre: 'Marcelo Díaz', equipo:'Racing'},
    { nombre: 'Leonardo Ponzio', equipo:'River'},
    { nombre: 'Silvio Romero', equipo:'Independiente'},
    { nombre: 'Franco Armani', equipo:'River'},
  ];
  itemPorPagina;
  verificarAcceso = true;
  enBlanco = false;
  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  determinarCantidadItem(event) {
    localStorage.setItem('paginador', JSON.stringify(event.pageSize));
  }

  async filtroEliminados() {
    this.dataSource.data = await this.tablaJugadores;
  }

  verJugadores(element) {

  }

  eliminar(element) {

  }

  nuevo() {
    
  }

  ngOnInit(): void {
    this.filtroEliminados();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Equipos } from 'src/app/interfaces/equipos';

@Component({
  selector: 'app-equipos-tabla',
  templateUrl: './equipos-tabla.component.html',
  styleUrls: ['./equipos-tabla.component.css']
})
export class EquiposTablaComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }
  cargaPendientes = true;
  displayedColumns = ['nombre', 'acciones'];
  dataSource = new MatTableDataSource<Equipos>();
  tablaEquipos = [
    { nombre: 'River'},
    { nombre: 'Racing'},
    { nombre: 'Independiente'},
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
    this.dataSource.data = await this.tablaEquipos;
  }

  verJugadores(element) {
    this.router.navigate(['main/jugadores-tabla/' + element.nombre]);
  }

  eliminar(element) {

  }

  editar(element) {

  }

  nuevo() {
    this.router.navigate(['main/equipos-crear']);
  }

  ngOnInit(): void {
    this.filtroEliminados();
  }
}


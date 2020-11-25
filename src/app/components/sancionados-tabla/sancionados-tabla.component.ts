import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Jugador } from 'src/app/interfaces/jugador';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-sancionados-tabla',
  templateUrl: './sancionados-tabla.component.html',
  styleUrls: ['./sancionados-tabla.component.css']
})
export class SancionadosTablaComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router, private jugadoresService: JugadoresService) { }
  cargaPendientes = true;
  displayedColumns = ['nombre', 'fecha-sancion', 'partidosRestantes', 'acciones'];
  dataSource = new MatTableDataSource<any>();
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

  verJugadores(element) {

  }

  eliminar(element) {

  }

  nuevo() {

  }

  async cargarTabla() {
    const jugadores = await this.jugadoresService.get();
    this.dataSource.data = jugadores.filter(
      (element, index, array) => {
        return element.ban !== null;
      }
    );;
    console.log(jugadores);
    this.cargaPendientes = false;
  }

  ngOnInit(): void {

    this.cargarTabla();
  }

}

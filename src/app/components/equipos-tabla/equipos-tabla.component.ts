import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Equipos } from 'src/app/interfaces/equipos';
import { ConfirmarEliminarComponent } from '../dialogos/confirmar-eliminar/confirmar-eliminar.component';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-equipos-tabla',
  templateUrl: './equipos-tabla.component.html',
  styleUrls: ['./equipos-tabla.component.css']
})
export class EquiposTablaComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router, private equiposService: EquiposService) { }
  cargaPendientes = true;
  displayedColumns = ['nombre', 'acciones'];
  dataSource = new MatTableDataSource<Equipos>();
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
    this.router.navigate(['main/jugadores-tabla/' + element.name]);
  }

  eliminar(element) {
    const dialogRef = this.dialog.open(ConfirmarEliminarComponent);
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        await this.equiposService.eliminar(element.id);
        location.reload();
      }
    });
  }

  editar(element) {

  }

  nuevo() {
    this.router.navigate(['main/equipos-crear']);
  }

  async cargarTabla() {
    this.dataSource.data = await this.equiposService.get();
    this.cargaPendientes = false;
  }

  ngOnInit() {
    this.cargarTabla();
    console.log(this.dataSource.data);
  }
}


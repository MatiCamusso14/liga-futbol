import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Equipos } from 'src/app/interfaces/equipos';
import { ConfirmarEliminarComponent } from '../dialogos/confirmar-eliminar/confirmar-eliminar.component';
import { EquiposService } from 'src/app/services/equipos.service';
import { element } from 'protractor';
import { JugadoresService } from 'src/app/services/jugadores.service';


@Component({
  selector: 'app-jugadores-tabla',
  templateUrl: './jugadores-tabla.component.html',
  styleUrls: ['./jugadores-tabla.component.css']
})
export class JugadoresTablaComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute, private equiposService: EquiposService, private jugadoresServices: JugadoresService) { }
  cargaPendientes = true;
  displayedColumns = ['nombre', 'apellido', 'foto', 'inhabilitado', 'desde', 'partidosCumplir', 'acciones'];
  dataSource = new MatTableDataSource<Equipos>();
  tablaEquipos = [
    {
      nombre: 'Lucas Pratto',
      inhabilitado: false,
      desde: '-',
      partidosCumplir: '-'
    },
    {
      nombre: 'Juan Fernando Quintero',
      inhabilitado: true,
      desde: '18/08/2020',
      partidosCumplir: '2'
    },
    {
      nombre: 'Gonzalo Martinez',
      inhabilitado: false,
      desde: '-',
      partidosCumplir: '-'
    },
  ];
  itemPorPagina;
  verificarAcceso = true;
  enBlanco = false;
  private paginator: MatPaginator;
  private sort: MatSort;
  nombreEquipo;

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

  comprobarHabilitacion(data) {
    if (data.status !== undefined) {
      return 'Si';
    } else {
      data.desde = '-';
      data.partidosCumplir = '-';
      return 'No';
    }
  }

  determinarCantidadItem(event) {
    localStorage.setItem('paginador', JSON.stringify(event.pageSize));
  }


  eliminar(element) {
    const dialogRef = this.dialog.open(ConfirmarEliminarComponent);
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        await this.jugadoresServices.eliminar(element.id);
        location.reload();
      }
    });
  }

  editar(element) {

  }

  nuevo() {
    this.router.navigate(['main/jugadores-crear/' + this.nombreEquipo]);
  }

  async cargarTabla() {
    const equipos = await this.equiposService.get();
    for (let index = 0; index < equipos.length; index++) {
      const element = equipos[index];
      if (element.name === this.nombreEquipo) {
        this.dataSource.data = element.players;
        console.log(element.players);
      }
    }
    this.cargaPendientes = false;
  }

  ngOnInit(): void {
    {
      this.route.params.forEach((params: Params) => {
        this.nombreEquipo = params['equipo'];
      });
    }
    this.cargarTabla();
  }

}

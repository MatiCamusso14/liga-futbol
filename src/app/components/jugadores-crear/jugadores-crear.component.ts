import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Jugador } from 'src/app/interfaces/jugador';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-jugadores-crear',
  templateUrl: './jugadores-crear.component.html',
  styleUrls: ['./jugadores-crear.component.css']
})
export class JugadoresCrearComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private jugadoresService: JugadoresService,
    private dialog: MatDialog, private route: ActivatedRoute, private equiposService: EquiposService) { }

  jugadoresForm;
  cantidad = 0;
  fechaDesde = new Date();
  sancionado = '2';
  nombreEquipo;
  idEquipo;
  cargaPendientes = true;
  nombreArchivo;
  fotoSubida = false;
  rutaArchivo;

  cancel() {
    this.router.navigate(['main/jugadores-tabla/' + this.nombreEquipo]);
  }

  async nuevo(nombre, apellido) {
    const jugador = {} as Jugador;
    jugador.name = nombre;
    jugador.surname = apellido;
    jugador.status = 'unbanned';
    jugador.team_id = this.idEquipo;
    jugador.photo = this.rutaArchivo;
    await this.jugadoresService.nuevo(jugador);
    this.router.navigate(['main/jugadores-tabla/' + this.idEquipo]);
  }

  async cargarIdEquipo() {
    const equipos = await this.equiposService.get();
    for (let index = 0; index < equipos.length; index++) {
      const element = equipos[index];
      if (element.name === this.nombreEquipo) {
        this.idEquipo = element.id;
      }
    }
    this.cargaPendientes = false;
    console.log(this.idEquipo);
  }

  abrirExplorador(archivo) {
    archivo.click();
  }

  subirFoto(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      let datosFormulario = new FormData();
      this.nombreArchivo = event.target.files[i].name;
      datosFormulario.delete('archivo');
      datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name);
      let archivo = datosFormulario.get('archivo');
      this.rutaArchivo = 'imagenes/' + this.idEquipo + '/' + this.nombreArchivo;

      let referencia = this.jugadoresService.referenciaCloudStorage(this.rutaArchivo);
      let tarea = this.jugadoresService.tareaCloudStorage(this.rutaArchivo, archivo);
      tarea.percentageChanges().subscribe((data) => {
        let porcentaje;
        porcentaje = Math.round(data);
      });
      this.fotoSubida = true;
    }

  }


  async ngOnInit() {
    this.jugadoresForm = this.formBuilder.group({
      'nombre': [null, Validators.required],
      'apellido': [null, Validators.required],
    });
    {
      this.route.params.forEach((params: Params) => {
        this.nombreEquipo = params['equipo'];
      });
    }
    this.cargarIdEquipo();
  }
}

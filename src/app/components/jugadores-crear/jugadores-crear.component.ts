import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-jugadores-crear',
  templateUrl: './jugadores-crear.component.html',
  styleUrls: ['./jugadores-crear.component.css']
})
export class JugadoresCrearComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private jugadoresService: JugadoresService,
    private dialog: MatDialog, private route: ActivatedRoute) { }

  jugadoresForm;
  cantidad = 0;
  fechaDesde = new Date();
  sancionado = '2';
  nombreEquipo;

  cancel() {
    this.router.navigate(['main/jugadores-tabla/' + this.nombreEquipo]);
  }

  prueba() {
    if (this.sancionado === '2') {
      this.cantidad = 0;
      this.fechaDesde = this.fechaDesde;

      this.jugadoresForm.setValue({
        cantidad: this.cantidad,
        desde: this.fechaDesde,
      });
    }
  }

  async nuevo(nombre) {
    this.jugadoresService.nuevo(nombre);
  }


  async ngOnInit() {
    this.jugadoresForm = this.formBuilder.group({
      'nombre': [null, Validators.required],
      'sancionado': [null, Validators.required],
      'desde': [null, Validators.required],
      'cantidad': [null, [Validators.required, Validators.min(0), Validators.max(999999)]],
    });
    {
      this.route.params.forEach((params: Params) => {
        this.nombreEquipo = params['equipo'];
      });
    }
    await this.prueba();
  }
}

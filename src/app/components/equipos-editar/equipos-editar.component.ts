import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-equipos-editar',
  templateUrl: './equipos-editar.component.html',
  styleUrls: ['./equipos-editar.component.css']
})
export class EquiposEditarComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private equiposService: EquiposService,
    private dialog: MatDialog, private route: ActivatedRoute) { }

  equiposForm;
  idEquipo;
  nombreEquipo;
  cargaPendientes = true;
  cancel() {
    this.router.navigate(['main/equipos-tabla']);
  }

  async editar(nombre) {
    const editar = {
      id: +this.idEquipo,
      name: this.nombreEquipo
    }
    await this.equiposService.editar(editar);
    this.router.navigate(['main/equipos-tabla'])
  }

  async cargarNombreEquipo() {
    const equipos = await this.equiposService.get();
    for (let index = 0; index < equipos.length; index++) {
      const element = equipos[index];
      if (element.id === +this.idEquipo) {
        this.nombreEquipo = element.name;
      }
    }
    this.cargaPendientes = false;
  }


  async ngOnInit() {
    this.equiposForm = this.formBuilder.group({
      'nombre': [null, Validators.required],
    });
    {
      this.route.params.forEach((params: Params) => {
        this.idEquipo = params['id'];
      });
    }
    this.cargarNombreEquipo();
  }

}

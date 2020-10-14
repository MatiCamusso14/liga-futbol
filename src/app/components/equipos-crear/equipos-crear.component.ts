import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { EquiposService } from 'src/app/services/equipos.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-equipos-crear',
  templateUrl: './equipos-crear.component.html',
  styleUrls: ['./equipos-crear.component.css']
})
export class EquiposCrearComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private equiposService: EquiposService,
    private dialog: MatDialog) { }

  equiposForm;

  cancel() {
    this.router.navigate(['main/equipos-tabla']);
  }

  async nuevo(nombre) {
    await this.equiposService.nuevo(nombre);
    this.router.navigate(['main/equipos-tabla'])
  }


  async ngOnInit() {
    this.equiposForm = this.formBuilder.group({
      'nombre': [null, Validators.required],
    });
  }

}

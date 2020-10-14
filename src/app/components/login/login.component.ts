import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { LoginIncorrectoComponent } from '../snack-bar/login-incorrecto/login-incorrecto.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuariosService, private router: Router, private snackBar: MatSnackBar) { }

  spinner = false;
  logueado = false;
  listaPermisos = [];

  async entrar(userEmail: string, userPassword: string) {
    let token;
    this.spinner = await true;
    token = await this.usuarioService.login(userEmail, userPassword);
    const verificarToken = token.split(' ');
    if (verificarToken.length === 1) {
      this.router.navigate(['main/home']);
      this.logueado = true;
      localStorage.setItem('Logueado', 'true');
      localStorage.setItem('usuarioRegistrado', JSON.stringify(userEmail));
    } else {
      this.openSnackBarErrorLogin();
    }
    this.spinner = false;
  }

  openSnackBarErrorLogin() {
    this.snackBar.openFromComponent(LoginIncorrectoComponent, {
      duration: 3000,
    });
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('usuarioRegistrado'));
  }

  verificarSesionAbierta() {
    const logueado = localStorage.getItem('Logueado');
    if (logueado) {
      this.router.navigate(['main/home']);
    }
  }

  ngOnInit() {
    this.verificarSesionAbierta();
  }

}

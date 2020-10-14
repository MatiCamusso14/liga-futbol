import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { ConfigService } from './configuration/config.service';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private confService: ConfigService, private http: HttpClient) { }

  httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',

    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJ1c2VyRW1haWwiOiJzYW50aWRhbG1hc3NvakBnbWFpbC5jb20iLCJpYXQiOjE2MDI2ODQwMTksImV4cCI6MTYwMjY4NzYxOX0.YJOCbcipmYnO2hxW2BRm91yjhe9a92q9BBGLvS4nau4'
  });



  async get() {
    let tokenRequest = await fetch('https://liga-futbol.herokuapp.com/api/v1.0/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: "santidalmassoj@gmail.com",
        password: "santi123"
      })
    });
    const token = await tokenRequest.json();
    const teamRequest = fetch('https://liga-futbol.herokuapp.com/api/v1.0/teams', {
        method: 'GET',
        headers: {
          'Authorization': token,
          'Access-Control-Allow-Origin': '*'
        }
      });
    const team = await (await teamRequest).json();
    return team;
  }

  async nuevo(nombre) {
    let tokenRequest = await fetch('https://liga-futbol.herokuapp.com/api/v1.0/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: "santidalmassoj@gmail.com",
        password: "santi123"
      })
    });
    const token = await tokenRequest.json();
    const teamRequest = fetch('https://liga-futbol.herokuapp.com/api/v1.0/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          name: nombre
        })
      });
    const team = await (await teamRequest).json();
    return team;
  }

  async eliminar(id) {
    let tokenRequest = await fetch('https://liga-futbol.herokuapp.com/api/v1.0/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: "santidalmassoj@gmail.com",
        password: "santi123"
      })
    });
    const token = await tokenRequest.json();
    const teamRequest = fetch('https://liga-futbol.herokuapp.com/api/v1.0/teams/' + id, {
        method: 'DELETE',
        headers: {
          'Authorization': token,
          'Access-Control-Allow-Origin': '*'
        },
      });
    const team = await (await teamRequest).json();
    return team;
  }
  
}

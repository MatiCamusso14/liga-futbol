import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor() { }

  async nuevo(jugador) {
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
    const teamRequest = fetch('https://liga-futbol.herokuapp.com/api/v1.0/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          name: jugador.name,
          surname: jugador.surname,
          team_id: jugador.team_id
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
    const teamRequest = fetch('https://liga-futbol.herokuapp.com/api/v1.0/players/' + id, {
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

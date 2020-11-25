import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { resolve } from 'dns';
import * as firebase from 'firebase';
import 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private storage: AngularFireStorage) { }

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
        team_id: jugador.team_id,
        photo: jugador.photo
      })
    });
    const team = await (await teamRequest).json();
    return team;
  }

  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }

  async downloadCloudStorage(ruta: string) {
    try {
      return await firebase.default.storage().ref().child(ruta).getDownloadURL();
    } catch (error) {
      return undefined;
    }

  }

  async downloadCloudStorageDatos(ruta: string) {
    try {
      return await firebase.default.storage().ref().child(ruta).getMetadata();
    } catch (error) {
      return undefined;
    }

  }

  async expulsar(element, partidos) {
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
    const teamRequest = fetch('https://liga-futbol.herokuapp.com/api/v1.0/bans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        date: new Date(),
        matches: partidos,
        player_id: element.id,
      })
    });
    const team = await (await teamRequest).json();
    return team;
  }

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
    const teamRequest = fetch('https://liga-futbol.herokuapp.com/api/v1.0/players', {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Access-Control-Allow-Origin': '*'
      }
    });
    const team = await (await teamRequest).json();
    return team;
  }

  async getPorEquipo(id) {
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
      method: 'GET',
      headers: {
        'Authorization': token,
        'Access-Control-Allow-Origin': '*'
      }
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

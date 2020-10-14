import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  async login(email, password) {
    let tokenRequest = await fetch('https://liga-futbol.herokuapp.com/api/v1.0/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    const token = await tokenRequest.json();
    return token;
  }
}


// email: "santidalmassoj@gmail.com",
// password: "santi123"

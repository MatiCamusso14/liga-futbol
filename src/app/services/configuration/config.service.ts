import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  private static config: Config;

  getConfiguration(): Config {
    return ConfigService.config;
  }

  load() {
    const jsonPath = environment.configFile;
    return new Promise((resolve, reject) => {
      this.http.get<Config>(jsonPath).toPromise().then((response: Config) => {
        // response.json es un Promise
        ConfigService.config = response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load configuration '${jsonPath}': ${JSON.stringify(response)}`);
      });
    });
  }
}

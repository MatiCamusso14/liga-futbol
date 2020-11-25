import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-ver-imagen',
  templateUrl: './ver-imagen.component.html',
  styleUrls: ['./ver-imagen.component.css']
})
export class VerImagenComponent implements OnInit {
  
  jugador;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private jugadorService: JugadoresService) { 
    this.jugador = JSON.parse(data);
  }

  cargandoDatos = true;
  rutaCompleta;
  rutaDescarga;

  async descargarImagen() {
    let ruta;
    let posicionCarpetaImagen;
    const rutaCompleta = this.jugador.photo;
    this.rutaDescarga = await this.jugadorService.downloadCloudStorage(rutaCompleta);
    this.cargandoDatos = false;
  }

  resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      let image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = () => {
        let width = image.width;
        let height = image.height;

        if (width <= maxWidth && height <= maxHeight) {
          resolve(file);
        }

        let newWidth;
        let newHeight;

        if (width > height) {
          newHeight = height * (maxWidth / width);
          newWidth = maxWidth;
        } else {
          newWidth = width * (maxHeight / height);
          newHeight = maxHeight;
        }

        let canvas = document.createElement('canvas');
        canvas.width = newWidth;
        canvas.height = newHeight;

        let context = canvas.getContext('2d');

        context.drawImage(image, 0, 0, newWidth, newHeight);

        canvas.toBlob(resolve, file.type);
      };
      image.onerror = reject;
    });
  }

  ngOnInit(): void {
    this.descargarImagen();
  }

}

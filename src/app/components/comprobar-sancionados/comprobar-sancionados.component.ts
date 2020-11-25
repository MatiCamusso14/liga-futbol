import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/services/equipos.service';
import * as faceapi from 'face-api.js';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Component({
  selector: 'app-comprobar-sancionados',
  templateUrl: './comprobar-sancionados.component.html',
  styleUrls: ['./comprobar-sancionados.component.css']
})
export class ComprobarSancionadosComponent implements OnInit {

  constructor(private equiposService: EquiposService, private jugadorService: JugadoresService) { }

  equipoSeleccionado;
  listaEquipos = [];
  cargaPendientes = true;
  jugadoresDetectados = [];
  loader = false;
  cantidadCarasDetectadas = 0;
  carasProcesadas = 0;
  progreso = 0;
  canvas;
  listaPintados = [];
  listaFotosBaseDatos = [];
  jugadoresDescargados = 0;
  totalJugadoresADescargar = 0;

  async leerFoto(file) {
    this.progreso = 0;
    let ancho;
    let alto;
    if (window.matchMedia("(min-width: 600px)").matches) {
      ancho = 900;
      alto = 600;
    } else {
      ancho = 600;
      alto = 300;
    }
    this.loader = true;
    this.resizeImage(file, ancho, alto).then(async blob => {





      const listaJugadores = await this.jugadorService.getPorEquipo(this.equipoSeleccionado.id);
      
      this.progreso = 1;
      this.totalJugadoresADescargar = listaJugadores.length;
      const sumaProgresoDescarga = 38 / this.totalJugadoresADescargar;
      for (let index = 0; index < listaJugadores.length; index++) {
        const element2 = listaJugadores[index];
        if (element2.photo !== undefined) {
          const rutaDescarga = await this.jugadorService.downloadCloudStorage(element2.photo);
          const request1 = await fetch(rutaDescarga);
          const imageBlob = await request1.blob();
          this.listaFotosBaseDatos.push({
            jugador: element2,
            foto: imageBlob
          });
          this.jugadoresDescargados = this.jugadoresDescargados + 1;
          this.progreso = this.progreso + sumaProgresoDescarga;
        }

      }
      const MODEL_URL = "assets/weights";
      Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      ]).then(async val => {
        this.progreso = 39;
        const container = document.getElementById('imagenpintada');
        container.style.position = 'relative';
        const image = await faceapi.bufferToImage(blob);
        container.append(image);
        const canvas = faceapi.createCanvasFromMedia(image);
        const caras = document.getElementById('caras');
        caras.append(canvas);
        const displaySize = { width: image.width, height: image.height };
        faceapi.matchDimensions(canvas, displaySize);
        const detections1 = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors();
        this.cantidadCarasDetectadas = detections1.length;
        this.carasProcesadas = 0;
        this.progreso = 40;
        const sumaProgreso = 60 / this.cantidadCarasDetectadas;
        const resizedDetections = faceapi.resizeResults(detections1, displaySize);


        for (let index = 0; index < detections1.length; index++) {
          const element = detections1[index];
          for (let index = 0; index < this.listaFotosBaseDatos.length; index++) {
            const element2 = this.listaFotosBaseDatos[index];
            const image = await faceapi.bufferToImage(element2.foto);
            const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors();
            const distance = faceapi.euclideanDistance(element.descriptor, detections[0].descriptor);
            if (distance < 0.5) {
              this.jugadoresDetectados.push(element2);
              console.log('Es la misma persona');
              for (let indexRD = 0; indexRD < resizedDetections.length; indexRD++) {
                const elementRD = resizedDetections[indexRD];
                if (element.descriptor === elementRD.descriptor) {
                  this.listaPintados.push(elementRD.descriptor);
                  if (element2.jugador.ban === null) {
                    const box = elementRD.detection.box;
                    const drawBox = new faceapi.draw.DrawBox(box, { label: element2.jugador.name + ' ' + element2.jugador.surname, boxColor: 'green' });
                    drawBox.draw(canvas);
                  } else {
                    const box = elementRD.detection.box;
                    const drawBox = new faceapi.draw.DrawBox(box, { label: element2.jugador.name + ' ' + element2.jugador.surname, boxColor: 'red' });
                    drawBox.draw(canvas);
                  }

                  break;
                }

              }
            }
            if (distance >= 0.5) {
              console.log('No es la misma persona');
            }
          }
          this.progreso = this.progreso + sumaProgreso;
          this.carasProcesadas = this.carasProcesadas + 1;
        }
        for (let index = 0; index < resizedDetections.length; index++) {
          const element = resizedDetections[index];
          let yaPintado = false;
          for (let index2 = 0; index2 < this.listaPintados.length; index2++) {
            const element2 = this.listaPintados[index2];
            if (element2 === element.descriptor) {
              yaPintado = true;
            }
          }
          if (!yaPintado) {
            const box = element.detection.box;
            const drawBox = new faceapi.draw.DrawBox(box, { label: 'Jugador no registrado', boxColor: 'blue' });
            drawBox.draw(canvas);
          }

        }
        this.progreso = 100;
        console.log(this.jugadoresDetectados);
      });
    });
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

  async cargarTabla() {
    this.listaEquipos = await this.equiposService.get();
    console.log(this.listaEquipos);
    this.cargaPendientes = false;
  }

  ngOnInit(): void {
    this.cargarTabla();
  }

}

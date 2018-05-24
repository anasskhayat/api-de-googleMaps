import { Component } from '@angular/core';
import { MapasService } from "./services/mapas.service";
import { Marcador } from "../app/interface/marcador.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat: number = 40.4194602;
  lng: number = -3.7029173;
  zoom:number=14;
  maracdorSel: any = null
  constructor(public _ms:MapasService){
    this._ms.cargarMarrcador();
  }

  clickmapa(event) {
   
    let nuevoMarcador:Marcador={
      lat: event.coords.lat,
      lng: event.coords.lng,
      draggble: true,

      titulo:"sin titulo",

      
    }
    this._ms.insertarMarcador(nuevoMarcador);
     
  }
  clickMarcador(marcador: Marcador,i:number){

    this.maracdorSel=marcador;
  }
  dragEndMarcador(marcador: Marcador, event){

    let lat= event.coords.lat;
    let lng = event.coords.lng;
    marcador.lat=lat;
    marcador.lng=lng;
    this._ms.guardarMarcador();

  }
}
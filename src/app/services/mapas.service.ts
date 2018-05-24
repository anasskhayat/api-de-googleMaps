import { Injectable } from '@angular/core';
import { Marcador } from "../interface/marcador.interface";

@Injectable()
export class MapasService {

  marcadores: Marcador[]=[];

  constructor() { 

    let nuevomarcador: Marcador={
      
      lat:40.4194602,
      lng: -3.7029173,
      draggble: true,
      titulo: "centro de madrid"
    }
    this.marcadores.push(nuevomarcador);
  }

  insertarMarcador(marcador:Marcador){
    this.marcadores.push(marcador);
    this.guardarMarcador();
  }
  borraDescripcion(idx:number){
    this.marcadores.splice(idx);
    this.guardarMarcador();
  }

guardarMarcador(){
  localStorage.setItem("marcadores", JSON.stringify(this.marcadores))
}
cargarMarrcador(){
  if(localStorage.getItem('marcadores')){
    this.marcadores=JSON.parse(localStorage.getItem('marcadores'));
  }else{
    this.marcadores=[];
  }
}

  }


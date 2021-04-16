import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[]=[
    {
      tipo: 'pérro', nombre : 'lu', edad: 10
    },
    {
      tipo: 'gato', nombre : 'assd', edad: 8
    },
    {
      tipo: 'perico', nombre : 'peri', edad: 1
    },
    {
      tipo: 'lro', nombre : 'lo', edad: 2
    }
  ]
  constructor() { 
    console.log('funcionando service')
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerId(i){
    return this.equipo[i];
  }
}

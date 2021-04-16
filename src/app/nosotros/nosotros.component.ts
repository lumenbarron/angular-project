import { Component, OnInit } from '@angular/core';
import { EquipoService} from './../equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.sass']
})
export class NosotrosComponent implements OnInit {

  equipo:any[] = [];

  constructor( private _servicio : EquipoService) { 
this.equipo = _servicio.obtenerEquipo();
console.log(this.equipo)
  }

  ngOnInit(): void {
  }

}

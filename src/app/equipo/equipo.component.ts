import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EquipoService} from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.sass']
})
export class EquipoComponent implements OnInit {

  equipo:any[] = [];

  constructor(
    private ruta: ActivatedRoute,
    private service : EquipoService,
  ) {
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.equipo = this.service.obtenerId(params['id'])
      console.log(this.equipo)
    } )
   }

  ngOnInit(): void {
  }

}

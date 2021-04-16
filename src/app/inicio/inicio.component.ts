import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  pokemons:any[] = [];

  constructor(
    private dataService : PokemonService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemon()
    .subscribe((response: any) => {
      console.log(response);
      response.results.forEach(result => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniResponse: any) => {
          this.pokemons.push(uniResponse);
          console.log(this.pokemons);
          
        })
      });
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  pokemons:any[] = [];
  page = 0;
  totalPokemons:number;

  constructor(
    private dataService : PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  //Get Pokemons
  getPokemon(){
    console.log(this.page, 'page');
    let pageNumber = parseInt(this.page + '0') 
   console.log(pageNumber) 
    this.dataService.getPokemon( 10, pageNumber)
    .subscribe((response: any) => {
      console.log(response);
      this.totalPokemons = response.count;
      // this.page++; 
      console.log(this.totalPokemons);
      
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

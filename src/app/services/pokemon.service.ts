import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  //Get Pokemon
  getPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon')
  }

  //Get more pokemons
  getMoreData( name:string ){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}

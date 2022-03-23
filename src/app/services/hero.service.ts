import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]>{ 
    return of(HEROESMOCKDATA); // l'of simula una chiamata ad un server
  }

}

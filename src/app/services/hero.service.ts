import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { } // iniezione del servizio tramite costruttore

  getHeroes(): Observable<Hero[]>{ 
     const HEROES: Observable<Hero[]> = of(HEROESMOCKDATA).pipe(delay(1000)); // l'of simula una chiamata ad un server
     this.messageService.add('HeroService: fetched heroes');
     return HEROES;
  }

  getHero(selectedId: number): Observable<Hero> {
    const hero = HEROESMOCKDATA.find(h => h.id === selectedId)!;
    this.messageService.add(`HeroService fetched hero id=${selectedId}`);
    return of (hero);
  }

}

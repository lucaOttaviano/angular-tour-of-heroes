import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService: MessageService, private http:HttpClient) { } // iniezione del servizio tramite costruttore, inetto l'httpclient

  getHeroes(): Observable<Hero[]>{ 
    return this.http.get<Hero[]>(this.heroesUrl) // richiama l'url
      .pipe(
        tap(_ => this.log('fetched heroes')), // richiama la funzione log() 
        catchError(error => { // all'errrore
          console.error(error); // stampa l'errore
          this.log(`getHeroes failed: ${error.status}: ${error.body.error}`); // logga l'errore 
          let response = [] as Hero[];
          return of(response);
        })
      )
  }

  getHero(selectedId: number): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + '/' + selectedId) // inserisce l'id selezionato nell'url
      .pipe(
        tap(_ => this.log(`fetched heroes id = ${selectedId}`)), // richiama la funzione log() 
        catchError(error => { // all'errrore
          console.error(error); // stampa l'errore
          this.log(`getHero id = ${selectedId} failed: ${error.status}: ${error.body.error}`); // logga l'errore 
          return of();
        })
      );
  }


  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(error => { // all'errrore
        console.error(error); // stampa l'errore
        this.log(`update hero failed: ${error.status}: ${error.body.error}`); // logga l'errore 
        return of();
      })
    );
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}

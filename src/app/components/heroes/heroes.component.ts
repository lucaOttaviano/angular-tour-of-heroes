import { Component, OnInit } from '@angular/core';
import { HEROESMOCKDATA } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero'; // importa la classe hero contenuta nell'hero.ts
import { HeroService } from 'src/app/services/hero.service';

@Component({ // specifica che al tag app-heroes corrisponde il file heroes.component.html
  selector: 'app-heroes', // al tag app-heroes
  templateUrl: './heroes.component.html', // collega heroes.component.html 
  styleUrls: ['./heroes.component.scss'] // e heroes.component.css
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; 
  selectedHero?: Hero; // il punto interrogativo può essere nullabile, essere quindi di valore nullo, perchè da subito non c'è un eroe selezionato, vuol quindi dire: "la variabile di nome selectedHero di tipo Hero può avere valore nullo"

  constructor(private heroService: HeroService) { } // iniezione del servizio

  ngOnInit(): void { // è un life cicle hook (un ciclo di vita, nasce quando viene chiamato, muore quando non viene più utilizzato)
    this.getHeroes();      
  }

  onSelect(pippo: Hero){
    this.selectedHero= pippo; // inserisci l'eroe cliccato nella variabile pippo
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
    });
  }

}

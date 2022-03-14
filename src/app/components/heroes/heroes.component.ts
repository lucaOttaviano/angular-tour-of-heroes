import { Component, OnInit } from '@angular/core';
import { HEROESMOCKDATA } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero'; // importa la classe hero contenuta nell'hero.ts

@Component({ // specifica che al tag app-heroes corrisponde il file heroes.component.html
  selector: 'app-heroes', // al tag app-heroes
  templateUrl: './heroes.component.html', // collega heroes.component.html 
  styleUrls: ['./heroes.component.scss'] // e heroes.component.css
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROESMOCKDATA; // dentro la variabile di nome heroes, di tipo array Hero[], corrisponde a HEROESMOCKDATA, recuperato da mock-heroes.ts con l'import ad inizio pagina
  selectedHero?: Hero; // il punto interrogativo può essere nullabile, essere quindi di valore nullo, perchè da subito non c'è un eroe selezionato, vuol quindi dire: "la variabile di nome selectedHero di tipo Hero può avere valore nullo"

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pippo: Hero){
    this.selectedHero= pippo; // inserisci l'eroe cliccato nella variabile pippo
  }

}

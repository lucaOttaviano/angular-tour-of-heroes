import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero'; // importa la classe hero contenuta nell'hero.ts

@Component({ // specifica che al tag app-heroes corrisponde il file heroes.component.html
  selector: 'app-heroes', // al tag app-heroes
  templateUrl: './heroes.component.html', // collega heroes.component.html 
  styleUrls: ['./heroes.component.scss'] // e heroes.component.css
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}

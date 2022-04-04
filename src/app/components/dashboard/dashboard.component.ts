import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service'; // import del servizio

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes: Hero[] = []; 
  constructor(private heroService: HeroService) { } // injection del servizio

  ngOnInit(): void {
    console.log('DashboardComponent ngOnInit()')
    this.getHeroes();
  }

  ngOnDestroy():void{
    console.log('DashboardComponent ngOnDestroy()');
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(data => this.heroes = data.slice(1,5)); 
  }
}

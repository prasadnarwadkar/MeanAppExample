import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../services/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  async ngOnInit(): Promise<void> {
    (await this.heroService.getHeroesUsingHttpClient())
      .subscribe((heroes: any) => {
        this.heroes = (heroes as any);
      })//.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}

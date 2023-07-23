import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  isGameDetailRoute: boolean = false;
  private routerSubscription!: Subscription;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(() => {
      this.isGameDetailRoute = this.router.url.startsWith('/game/');
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the router events to avoid memory leaks
    this.routerSubscription.unsubscribe();
  }
}

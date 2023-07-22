import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  isGameDetailRoute: boolean = false;
  private routerSubscription!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) { }

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

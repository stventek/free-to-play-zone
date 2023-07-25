import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit, OnDestroy {
  isHome = false;
  private routerSubscription!: Subscription;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(() => {
      this.isHome = this.router.url == '/';
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}

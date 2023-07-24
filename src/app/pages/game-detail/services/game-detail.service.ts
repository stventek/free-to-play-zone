// shared.service.ts
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GameDetail } from '../models/game-detail.interface';
import { enviroment } from 'src/environments/environment';

@Injectable()
export class GameDetailService implements OnDestroy {
  private gameDetailSource = new BehaviorSubject<GameDetail | null>(null);
  gameInfo$ = this.gameDetailSource.asObservable();

  title: string | undefined;
  filters: any;
  private httpSubscription: Subscription | undefined;

  constructor(private http: HttpClient) {}

  setGameDetail(gameDetail: GameDetail | null) {
    this.gameDetailSource.next(gameDetail);
  }

  ngOnDestroy() {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }

  refreshGameDetail(id: string) {
    this.httpSubscription = this.http
      .get<GameDetail>(enviroment.apiBase + 'api/game', {
        headers: {
          'X-RapidAPI-Key': enviroment.xRapidAPIKey,
          'X-RapidAPI-Host': enviroment.xRapidAPIHost,
        },
        params: { id },
      })
      .subscribe(gameDetail => {
        this.setGameDetail(gameDetail);
      });
  }
}

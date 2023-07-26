// shared.service.ts
import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Subscription,
  catchError,
  tap,
  throwError,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GameDetail } from '../models/game-detail.interface';
import { environment } from 'src/environments/environment';
import { ErrorResponse } from '../models/error.interface';

@Injectable()
export class GameDetailService implements OnDestroy {
  private gameDetailSource = new BehaviorSubject<GameDetail | null>(null);
  private errorSource = new BehaviorSubject<ErrorResponse | null>(null);
  gameInfo$ = this.gameDetailSource.asObservable();
  error$ = this.errorSource.asObservable();

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
      .get<GameDetail>(environment.apiBase + 'api/game', {
        headers: {
          'X-RapidAPI-Key': environment.xRapidAPIKey,
          'X-RapidAPI-Host': environment.xRapidAPIHost,
        },
        params: { id },
      })
      .pipe(
        tap(gameDetail => {
          this.setGameDetail(gameDetail);
        }),
        catchError((error: ErrorResponse) => {
          this.errorSource.next(error);
          return throwError(() => error);
        })
      )
      .subscribe();
  }
}

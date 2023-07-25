import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GameInfo } from '../models/game.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class GameInfoService {
  gameInfoSource = new BehaviorSubject<GameInfo[] | null>(null);
  gameInfo$ = this.gameInfoSource.asObservable();

  title: string | undefined;
  filters: any;

  constructor(private http: HttpClient) {}

  setGameInfo(gameInfo: GameInfo[]) {
    this.gameInfoSource.next(gameInfo);
  }

  refreshGameInfo() {
    let params = new HttpParams();

    if (this.filters) {
      for (const key in this.filters) {
        if (Object.prototype.hasOwnProperty.call(this.filters, key)) {
          if (this.filters[key]) params = params.set(key, this.filters[key]);
        }
      }
    }

    this.http
      .get<GameInfo[]>(environment.apiBase + 'api/games', {
        headers: {
          'X-RapidAPI-Key': environment.xRapidAPIKey,
          'X-RapidAPI-Host': environment.xRapidAPIHost,
        },
        params,
      })
      .subscribe(gameInfo => {
        if (this.title) {
          gameInfo = gameInfo.filter(game =>
            game.title.toLowerCase().includes(this.title!.toLowerCase())
          );
        }
        this.setGameInfo(gameInfo);
      });
  }

  applyFilters(filters: any) {
    this.filters = filters;
  }

  setTitle(title: string) {
    this.title = title;
  }
}

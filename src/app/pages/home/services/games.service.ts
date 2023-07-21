// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GameInfo } from '../models/game.interface';

@Injectable()
export class GameInfoService {
    gameInfoSource = new BehaviorSubject<GameInfo[] | null>(null);
    gameInfo$ = this.gameInfoSource.asObservable();

    title: string | undefined;
    filters: any;

    constructor( private http: HttpClient) { }
  
    setGameInfo(gameInfo: GameInfo[]) {
      this.gameInfoSource.next(gameInfo);
    }

    refreshGameInfo(){
      // if(title) TODO
      let params = new HttpParams();

      if (this.filters) {
          for (const key in this.filters) {
              if (this.filters.hasOwnProperty(key)) {
                if(this.filters[key]) params = params.set(key, this.filters[key]);
              }
          }
      }

      this.http.get<GameInfo[]>('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers: {
        'X-RapidAPI-Key': 'c34e11ff9fmshad54035375d42a4p14e620jsn52c8f3275345',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
        params
      }).subscribe( gameInfo => {
        if(this.title) {
          gameInfo = gameInfo.filter((game) => game.title.toLowerCase().includes(this.title!.toLowerCase()));
        }
        this.setGameInfo(gameInfo);
      })
    }

    applyFilters(filters: any){
      this.filters = filters;
    }

    setTitle(title: string){
      this.title = title;
    }
}

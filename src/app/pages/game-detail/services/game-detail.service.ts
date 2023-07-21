// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GameDetail } from '../models/game-detail.interface';

@Injectable()
export class GameDetailService {
    private gameDetailSource = new BehaviorSubject<GameDetail | null>(null);
    gameInfo$ = this.gameDetailSource.asObservable();

    title: string | undefined;
    filters: any;

    constructor( private http: HttpClient) { }
  
    setGameDetail(gameDetail: GameDetail) {
      this.gameDetailSource.next(gameDetail);
    }

    refreshGameDetail(id: string){
      this.http.get<GameDetail>('https://free-to-play-games-database.p.rapidapi.com/api/game', {
        headers: {
        'X-RapidAPI-Key': 'c34e11ff9fmshad54035375d42a4p14e620jsn52c8f3275345',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
        params :{id},
      }).subscribe( gameDetail => {
        this.setGameDetail(gameDetail);
      })
    }
}

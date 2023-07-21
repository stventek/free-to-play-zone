// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GameDetail } from '../models/game-detail.interface';

@Injectable()
export class GameDetailService {
    private gameDetailSource = new BehaviorSubject<GameDetail | null>(null);
    gameInfo$ = this.gameDetailSource.asObservable();

    title: string | undefined;
    filters: any;
    private httpSubscription: Subscription | undefined;
    
    constructor( private http: HttpClient) { }
  
    setGameDetail(gameDetail: GameDetail | null) {
      this.gameDetailSource.next(gameDetail);
    }

    ngOnDestroy() {
      if (this.httpSubscription) {
        this.httpSubscription.unsubscribe();
      }
    }
    
    refreshGameDetail(id: string){
      this.httpSubscription = this.http.get<GameDetail>('https://free-to-play-games-database.p.rapidapi.com/api/game', {
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

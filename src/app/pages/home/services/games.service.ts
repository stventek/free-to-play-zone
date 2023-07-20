// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GameInfo } from '../models/game.model';

@Injectable()
export class GameInfoService {
    private gameInfoSource = new BehaviorSubject<GameInfo[] | null>(null);
    gameInfo$ = this.gameInfoSource.asObservable();
  
    constructor( private http: HttpClient) { }
  
    setGameInfo(gameInfo: GameInfo[]) {
      this.gameInfoSource.next(gameInfo);
    }

    fetchGameInfo(){
      this.http.get<GameInfo[]>('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers: {
        'X-RapidAPI-Key': 'c34e11ff9fmshad54035375d42a4p14e620jsn52c8f3275345',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      }).subscribe( gameInfo => {
          this.setGameInfo(gameInfo);
      })
    }
    
    searchGameInfo(title: string){
      this.http.get<GameInfo[]>('https://free-to-play-games-database.p.rapidapi.com/api/games?title=overwatch', {
        headers: {
        'X-RapidAPI-Key': 'c34e11ff9fmshad54035375d42a4p14e620jsn52c8f3275345',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      }).subscribe( gameInfo => {
          this.setGameInfo(gameInfo);
      })
    }
}

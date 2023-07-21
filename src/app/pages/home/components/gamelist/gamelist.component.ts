import { Component } from '@angular/core';
import { GameInfoService } from '../../services/games.service';
import { Observable } from 'rxjs';
import { GameInfo } from '../../models/game.interface';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent {

  gamelist$: Observable<GameInfo[] | null>
  batch = 15;

  constructor(private gameInfoService: GameInfoService){
    this.gamelist$ = this.gameInfoService.gameInfo$;
  }

  onScroll(){
    const gameInfo = this.gameInfoService.gameInfoSource.getValue();
    if(gameInfo && gameInfo.length > this.batch + 15){
      this.batch += 15;
    }
  }
}

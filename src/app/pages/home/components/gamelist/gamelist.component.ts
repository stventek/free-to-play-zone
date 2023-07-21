import { Component } from '@angular/core';
import { GameInfoService } from '../../services/games.service';
import { Observable } from 'rxjs';
import { GameInfo } from '../../models/game.interface';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent {

  gamelist$: Observable<GameInfo[] | null>

  constructor(private gameInfoService: GameInfoService){
    this.gamelist$ = this.gameInfoService.gameInfo$;
  }
}

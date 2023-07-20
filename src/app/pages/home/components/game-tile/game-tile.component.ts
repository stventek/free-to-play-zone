import { Component, Input } from '@angular/core';
import { GameInfo } from '../../models/game.model';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.css']
})
export class GameTileComponent {
  @Input() gameInfo!: GameInfo;
}

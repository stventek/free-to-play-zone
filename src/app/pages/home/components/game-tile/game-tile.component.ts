import { Component, Input } from '@angular/core';
import { GameInfo } from '../../models/game.interface';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent {
  @Input() gameInfo!: GameInfo;
}

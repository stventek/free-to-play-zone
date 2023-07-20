import { Component } from '@angular/core';
import { GameInfoService } from '../../services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private gameInfoService: GameInfoService){}

  ngOnInit(){
    this.gameInfoService.fetchGameInfo();
  }
}

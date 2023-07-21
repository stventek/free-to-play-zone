import { Component } from '@angular/core';
import { GameDetailService } from '../../services/game-detail.service';
import { ActivatedRoute } from '@angular/router';
import { GameDetail } from '../../models/game-detail.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent {
  gameId!: string;
  gameDetail$: Observable<GameDetail | null>;

  constructor(private gameDetailService: GameDetailService, private route: ActivatedRoute){
    this.gameDetail$ = this.gameDetailService.gameInfo$;
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.gameId = params['id']; 
      this.gameDetailService.refreshGameDetail(this.gameId);
    });
  }
}

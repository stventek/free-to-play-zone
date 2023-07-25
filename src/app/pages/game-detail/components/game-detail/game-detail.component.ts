import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GameDetailService } from '../../services/game-detail.service';
import { ActivatedRoute } from '@angular/router';
import { GameDetail, Screenshot } from '../../models/game-detail.interface';
import { Observable, Subscription } from 'rxjs';
import { Modal } from 'bootstrap';
import { ScreeenshotData } from '../../types/screenshot-data.interface';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit, OnDestroy {
  gameId!: string;
  gameDetail$: Observable<GameDetail | null>;
  routeSubscription!: Subscription;
  screenshots: ScreeenshotData[] | undefined;

  @ViewChild('modal') modal!: { nativeElement: string | Element };

  constructor(
    private gameDetailService: GameDetailService,
    private route: ActivatedRoute
  ) {
    this.gameDetail$ = this.gameDetailService.gameInfo$;
  }

  onImgClick(screenshots: Screenshot[], selectedId: number) {
    this.screenshots = screenshots.map(screenshot => {
      if (screenshot.id == selectedId) return { ...screenshot, active: true };
      return { ...screenshot, active: false };
    });
    const m = new Modal(this.modal.nativeElement);
    m.show();
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.gameId = params['id'];
      this.gameDetailService.refreshGameDetail(this.gameId);
    });
  }

  ngOnDestroy() {
    this.gameDetailService.setGameDetail(null);
    this.routeSubscription.unsubscribe();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameDetailService } from './services/game-detail.service';
import { ScreenshotsCarouselComponent } from './components/screenshots-carousel/screenshots-carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [GameDetailComponent, ScreenshotsCarouselComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NgbCarouselModule],
  exports: [GameDetailComponent],
  providers: [GameDetailService],
})
export class GameDetailModule {}

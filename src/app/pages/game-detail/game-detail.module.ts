import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameDetailService } from './services/game-detail.service';

@NgModule({
  declarations: [GameDetailComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [GameDetailComponent],
  providers: [GameDetailService],
})
export class GameDetailModule {}

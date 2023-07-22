import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { GameInfoService } from './services/games.service';
import { GamelistComponent } from './components/gamelist/gamelist.component';
import { GameTileComponent } from './components/game-tile/game-tile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersControlsComponent } from './components/filters-controls/filters-controls.component';
import { RouterModule } from '@angular/router';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomeComponent,
    GamelistComponent,
    GameTileComponent,
    FiltersControlsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbTypeaheadModule,
    InfiniteScrollModule
  ],
  exports: [HomeComponent],
  providers: [GameInfoService]
})
export class HomeModule { }

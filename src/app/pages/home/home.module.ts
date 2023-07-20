import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { GameInfoService } from './services/games.service';
import { GamelistComponent } from './components/gamelist/gamelist.component';
import { GameTileComponent } from './components/game-tile/game-tile.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersControlsComponent } from './components/filters-controls/filters-controls.component';

@NgModule({
  declarations: [
    HomeComponent,
    GamelistComponent,
    GameTileComponent,
    SearchComponent,
    FiltersControlsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  exports: [HomeComponent],
  providers: [GameInfoService]
})
export class HomeModule { }
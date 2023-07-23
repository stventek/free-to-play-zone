import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { GameDetailModule } from './game-detail/game-detail.module';
import { PagesComponent } from './components/pages/pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [PagesComponent, SearchComponent],
  imports: [
    CommonModule,
    HomeModule,
    GameDetailModule,
    PagesRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [PagesComponent],
})
export class PagesModule {}

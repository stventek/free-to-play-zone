import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { GameDetailModule } from './game-detail/game-detail.module';
import { PagesComponent } from './components/pages/pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [PagesComponent, SearchComponent, NotFoundComponent],
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

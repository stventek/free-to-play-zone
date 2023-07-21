import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { GameDetailModule } from './game-detail/game-detail.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    GameDetailModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

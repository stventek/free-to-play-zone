import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { GameDetailComponent } from './game-detail/components/game-detail/game-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game/:id', component: GameDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

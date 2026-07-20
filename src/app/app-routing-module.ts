import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameStoreGames } from './game-store-games/game-store-games';
import { GameStoreAbout } from './game-store-about/game-store-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameStoreGames
  },
  {
    path: 'about',
    component: GameStoreAbout
  },
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

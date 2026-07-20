import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { GameList } from './game-list/game-list';
import { Carrito } from './carrito/carrito';
import { FormsModule } from '@angular/forms';
import { GameStoreAbout } from './game-store-about/game-store-about';
import { GameStoreGames } from './game-store-games/game-store-games';
import { InputInteger } from './input-integer/input-integer';

@NgModule({
  declarations: [App, GameList, Carrito, GameStoreAbout, GameStoreGames, InputInteger],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}

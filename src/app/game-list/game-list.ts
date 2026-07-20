import { Component } from '@angular/core';
import { Game } from './Game';
import { GameCart } from '../game-cart';
import { GameData } from '../game-data';

@Component({
  selector: 'app-game-list',
  standalone: false,
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss',
})
export class GameList {
  games: Game[] = [];
  
  constructor(private cart: GameCart, private gameData: GameData) {
  }

  ngOnInit() {
    this.gameData.getAll().subscribe((games) => {
      this.games = games;
    });
  }
  addToCart(game: Game): void {
     this.cart.addToCart(game);
     game.stock -= game.quantity;
      game.quantity = 0;
  }
  

}
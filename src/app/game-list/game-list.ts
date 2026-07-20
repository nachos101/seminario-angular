import { Component } from '@angular/core';
import { Game } from './Game';
import { GameCart } from '../game-cart';


@Component({
  selector: 'app-game-list',
  standalone: false,
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss',
})
export class GameList {
  games: Game[] = [
    { 'name': 'LEGO Batman: The Video Game', 
      'price': 19.99, 
      'stock': 6, 
      'genre': 'Action',
      'image': './assets/lego_batman.jpeg',
      'clearance': false,
      'quantity': 0,
    },
    { 'name': 'LEGO Indiana Jones: The Original Adventures', 
      'price': 9.99, 
      'stock': 4, 
      'genre': 'Action',
      'image': './assets/lego_indiana_jones.jpeg',
      'clearance': true,
      'quantity': 0,
    },
    { 'name': 'LEGO Batman 2: DC Super Heroes', 
      'price': 29.99, 
      'stock': 0, 
      'genre': 'Action',
      'image': './assets/lego_batman_2.jpeg',
      'clearance': false,
      'quantity': 0,
    }
  ];
  carrito: GameCart;
  constructor() {
    this.carrito = new GameCart();
  }
  addToCart(game: Game): void {
    this.carrito.addToCart(game);
  }
  

}
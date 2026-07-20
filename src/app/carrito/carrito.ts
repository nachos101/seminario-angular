import { Component } from '@angular/core';
import { GameCart } from '../game-cart';
import { Game } from '../game-list/Game';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito {
  cardList$: Observable<Game[]>;

  constructor(private cart: GameCart) {
    this. cardList$ = this.cart.cardList.asObservable();
  }

  removeFromCart(game: GameCart): void {
    this.cart.removeFromCart(game);
  }
}

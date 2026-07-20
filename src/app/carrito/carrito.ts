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
  cartList$: Observable<Game[]>;

  constructor(private cart: GameCart) {
    this. cartList$ = this.cart.cartList.asObservable();
  }

  removeFromCart(game: GameCart): void {
    this.cart.removeFromCart(game);
  }
}

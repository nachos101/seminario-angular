import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game-list/Game';
import { CartItem } from './game-list/Game';


@Injectable({
  providedIn: 'root',
})
export class GameCart {

private _cartList: CartItem[] = [];
cartList: BehaviorSubject<CartItem[]> = new BehaviorSubject(this._cartList);


constructor(){}

addToCart(game: Game): void{
  let item = this._cartList.find((v1)=>v1.name === game.name);
  if (!item){
    this._cartList.push({...game, original: game});
  } else {
    item.quantity += game.quantity;
  }
  console.log(this._cartList);
  this.cartList.next(this._cartList);
}

removeFromCart(game: Game, quantity: number = 1): void{
  const item = this._cartList.find((v1)=> v1.name === game.name);
  if (!item){
    return;
  }

  item.quantity -= quantity;
  item.original.stock += quantity;

  if (item.quantity <= 0) {
    this._cartList = this._cartList.filter((v1) => v1.name !== game.name);
  }

  this.cartList.next(this._cartList);
}
}
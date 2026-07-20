import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game-list/Game';
import { CartItem } from './game-list/Game';


@Injectable({
  providedIn: 'root',
})
export class GameCart {

private _cartList: CartItem[] = [];
cardList: BehaviorSubject<CartItem[]> = new BehaviorSubject(this._cardList);


constructor(){}

addToCart(game: Game): void{
  let item = this._cardList.find((v1)=>v1.nombre === game.nombre);
  if (!item){
    this._cardList.push({...game, original: game});
  } else {
    item.cantidad += game.cantidad;
  }
  console.log(this._cardList);
  this.cardList.next(this._cardList);
}

removeFromCart(game: Game, quantity: number = 1): void{
  const item = this._cartList.find((v1)=> v1.nombre === game.nombre);
  if (!item){
    return;
  }

  item.cantidad -= quantity;
  item.original.stock += quantity;

  if (item.cantidad <= 0) {
    this._cartList = this._cartList.filter((v1) => v1.nombre !== game.nombre);
  }

  this.cartList.next(this._cartList);
}
}
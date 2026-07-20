import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger {
  constructor() {
    
  }
  @Input()
  quantity!: number;
  @Input()
  max!: number;
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  /*quantityChange(event: any, game: Game): void {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue, 10);

    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= game.stock) {
      game.quantity = numericValue;
    } else {
      // If the input is invalid, reset it to the previous valid value
      event.target.value = game.quantity;
    }
  }*/
}

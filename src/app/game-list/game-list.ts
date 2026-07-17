import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  standalone: false,
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss',
})
export class GameList {
  game = 
    { "name": "LEGO Batman: The Video Game", 
      "price": 29.99, 
      "stock": 10, 
      "genere": "Action",
      "image": "./assets/lego_batman.jpeg"
    };
    
}

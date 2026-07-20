import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Game } from './game-list/Game';

const URL = 'https://6a5d7f530ad09982aef7126c.mockapi.io/games';

@Injectable({
  providedIn: 'root',
})
export class GameData {

  constructor(private http: HttpClient) { }
  public getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(URL)
    .pipe(
      tap((games) => {
        games.forEach((game) => {
          game.quantity = 0;
        });
      }     
    ));
  }
}

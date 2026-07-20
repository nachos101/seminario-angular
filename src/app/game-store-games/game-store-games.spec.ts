import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStoreGames } from './game-store-games';

describe('GameStoreGames', () => {
  let component: GameStoreGames;
  let fixture: ComponentFixture<GameStoreGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameStoreGames],
    }).compileComponents();

    fixture = TestBed.createComponent(GameStoreGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

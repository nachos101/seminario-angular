import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStoreAbout } from './game-store-about';

describe('GameStoreAbout', () => {
  let component: GameStoreAbout;
  let fixture: ComponentFixture<GameStoreAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameStoreAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(GameStoreAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GameCart } from './game-cart';

describe('GameCart', () => {
  let service: GameCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

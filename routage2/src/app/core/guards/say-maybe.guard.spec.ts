import { TestBed } from '@angular/core/testing';

import { SayMaybeGuard } from './say-maybe.guard';

describe('SayMaybeGuard', () => {
  let guard: SayMaybeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SayMaybeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

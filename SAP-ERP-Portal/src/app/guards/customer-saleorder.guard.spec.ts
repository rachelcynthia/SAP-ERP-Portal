import { TestBed } from '@angular/core/testing';

import { CustomerSaleorderGuard } from './customer-saleorder.guard';

describe('CustomerSaleorderGuard', () => {
  let guard: CustomerSaleorderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomerSaleorderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VendorFinanceService } from './vendor-finance.service';

describe('VendorFinanceService', () => {
  let service: VendorFinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorFinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

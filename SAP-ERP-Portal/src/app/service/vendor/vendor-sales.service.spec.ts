import { TestBed } from '@angular/core/testing';

import { VendorSalesService } from './vendor-sales.service';

describe('VendorSalesService', () => {
  let service: VendorSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

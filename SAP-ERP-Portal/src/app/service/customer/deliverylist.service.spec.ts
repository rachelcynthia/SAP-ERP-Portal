import { TestBed } from '@angular/core/testing';

import { DeliverylistService } from './deliverylist.service';

describe('DeliverylistService', () => {
  let service: DeliverylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

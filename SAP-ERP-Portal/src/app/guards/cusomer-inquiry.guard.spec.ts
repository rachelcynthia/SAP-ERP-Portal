import { TestBed } from '@angular/core/testing';

import { CusomerInquiryGuard } from './cusomer-inquiry.guard';

describe('CusomerInquiryGuard', () => {
  let guard: CusomerInquiryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CusomerInquiryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

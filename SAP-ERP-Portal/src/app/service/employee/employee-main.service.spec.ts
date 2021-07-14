import { TestBed } from '@angular/core/testing';

import { EmployeeMainService } from './employee-main.service';

describe('EmployeeMainService', () => {
  let service: EmployeeMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

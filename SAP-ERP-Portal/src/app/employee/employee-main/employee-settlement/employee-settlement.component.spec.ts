import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSettlementComponent } from './employee-settlement.component';

describe('EmployeeSettlementComponent', () => {
  let component: EmployeeSettlementComponent;
  let fixture: ComponentFixture<EmployeeSettlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSettlementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDisplayPayslipComponent } from './employee-display-payslip.component';

describe('EmployeeDisplayPayslipComponent', () => {
  let component: EmployeeDisplayPayslipComponent;
  let fixture: ComponentFixture<EmployeeDisplayPayslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDisplayPayslipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDisplayPayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

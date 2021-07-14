import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDisplayFormPayslipComponent } from './employee-display-form-payslip.component';

describe('EmployeeDisplayFormPayslipComponent', () => {
  let component: EmployeeDisplayFormPayslipComponent;
  let fixture: ComponentFixture<EmployeeDisplayFormPayslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDisplayFormPayslipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDisplayFormPayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

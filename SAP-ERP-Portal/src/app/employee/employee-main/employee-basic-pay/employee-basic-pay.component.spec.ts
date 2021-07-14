import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBasicPayComponent } from './employee-basic-pay.component';

describe('EmployeeBasicPayComponent', () => {
  let component: EmployeeBasicPayComponent;
  let fixture: ComponentFixture<EmployeeBasicPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBasicPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBasicPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

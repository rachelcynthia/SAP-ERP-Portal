import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveCreateComponent } from './employee-leave-create.component';

describe('EmployeeLeaveCreateComponent', () => {
  let component: EmployeeLeaveCreateComponent;
  let fixture: ComponentFixture<EmployeeLeaveCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLeaveCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUnauthorisedComponent } from './employee-unauthorised.component';

describe('EmployeeUnauthorisedComponent', () => {
  let component: EmployeeUnauthorisedComponent;
  let fixture: ComponentFixture<EmployeeUnauthorisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUnauthorisedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUnauthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

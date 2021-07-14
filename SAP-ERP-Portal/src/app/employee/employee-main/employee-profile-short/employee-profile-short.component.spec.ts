import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileShortComponent } from './employee-profile-short.component';

describe('EmployeeProfileShortComponent', () => {
  let component: EmployeeProfileShortComponent;
  let fixture: ComponentFixture<EmployeeProfileShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProfileShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProfileShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

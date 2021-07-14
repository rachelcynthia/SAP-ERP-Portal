import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeQuotaComponent } from './employee-quota.component';

describe('EmployeeQuotaComponent', () => {
  let component: EmployeeQuotaComponent;
  let fixture: ComponentFixture<EmployeeQuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeQuotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeQuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

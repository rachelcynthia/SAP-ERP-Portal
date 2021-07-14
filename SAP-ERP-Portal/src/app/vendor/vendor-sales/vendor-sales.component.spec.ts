import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSalesComponent } from './vendor-sales.component';

describe('VendorSalesComponent', () => {
  let component: VendorSalesComponent;
  let fixture: ComponentFixture<VendorSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorInvoiceDisplayComponent } from './vendor-invoice-display.component';

describe('VendorInvoiceDisplayComponent', () => {
  let component: VendorInvoiceDisplayComponent;
  let fixture: ComponentFixture<VendorInvoiceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorInvoiceDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorInvoiceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

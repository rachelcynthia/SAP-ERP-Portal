import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRfqDisplayComponent } from './vendor-rfq-display.component';

describe('VendorRfqDisplayComponent', () => {
  let component: VendorRfqDisplayComponent;
  let fixture: ComponentFixture<VendorRfqDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRfqDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRfqDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

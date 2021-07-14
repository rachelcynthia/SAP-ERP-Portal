import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAgingDisplayComponent } from './vendor-aging-display.component';

describe('VendorAgingDisplayComponent', () => {
  let component: VendorAgingDisplayComponent;
  let fixture: ComponentFixture<VendorAgingDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorAgingDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAgingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

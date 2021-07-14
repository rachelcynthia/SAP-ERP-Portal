import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPoDisplayComponent } from './vendor-po-display.component';

describe('VendorPoDisplayComponent', () => {
  let component: VendorPoDisplayComponent;
  let fixture: ComponentFixture<VendorPoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPoDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

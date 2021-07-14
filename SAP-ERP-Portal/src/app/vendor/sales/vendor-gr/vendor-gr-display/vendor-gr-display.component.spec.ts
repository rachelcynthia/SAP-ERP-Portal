import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGrDisplayComponent } from './vendor-gr-display.component';

describe('VendorGrDisplayComponent', () => {
  let component: VendorGrDisplayComponent;
  let fixture: ComponentFixture<VendorGrDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorGrDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorGrDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

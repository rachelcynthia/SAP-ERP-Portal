import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMemoDisplayComponent } from './vendor-memo-display.component';

describe('VendorMemoDisplayComponent', () => {
  let component: VendorMemoDisplayComponent;
  let fixture: ComponentFixture<VendorMemoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorMemoDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorMemoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

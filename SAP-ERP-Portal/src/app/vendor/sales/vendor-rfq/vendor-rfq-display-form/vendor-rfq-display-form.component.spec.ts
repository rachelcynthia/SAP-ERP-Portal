import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRfqDisplayFormComponent } from './vendor-rfq-display-form.component';

describe('VendorRfqDisplayFormComponent', () => {
  let component: VendorRfqDisplayFormComponent;
  let fixture: ComponentFixture<VendorRfqDisplayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRfqDisplayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRfqDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

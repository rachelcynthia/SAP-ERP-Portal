import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorUnauthorisedComponent } from './vendor-unauthorised.component';

describe('VendorUnauthorisedComponent', () => {
  let component: VendorUnauthorisedComponent;
  let fixture: ComponentFixture<VendorUnauthorisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorUnauthorisedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorUnauthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

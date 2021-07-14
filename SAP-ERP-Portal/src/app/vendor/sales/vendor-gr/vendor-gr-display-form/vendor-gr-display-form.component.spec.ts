import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGrDisplayFormComponent } from './vendor-gr-display-form.component';

describe('VendorGrDisplayFormComponent', () => {
  let component: VendorGrDisplayFormComponent;
  let fixture: ComponentFixture<VendorGrDisplayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorGrDisplayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorGrDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

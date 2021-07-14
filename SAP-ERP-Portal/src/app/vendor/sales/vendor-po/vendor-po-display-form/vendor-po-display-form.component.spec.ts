import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPoDisplayFormComponent } from './vendor-po-display-form.component';

describe('VendorPoDisplayFormComponent', () => {
  let component: VendorPoDisplayFormComponent;
  let fixture: ComponentFixture<VendorPoDisplayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPoDisplayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPoDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

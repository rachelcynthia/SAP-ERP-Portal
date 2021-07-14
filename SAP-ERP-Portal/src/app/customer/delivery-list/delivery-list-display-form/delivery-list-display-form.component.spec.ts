import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryListDisplayFormComponent } from './delivery-list-display-form.component';

describe('DeliveryListDisplayFormComponent', () => {
  let component: DeliveryListDisplayFormComponent;
  let fixture: ComponentFixture<DeliveryListDisplayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryListDisplayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryListDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

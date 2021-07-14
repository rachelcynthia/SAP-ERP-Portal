import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverydisplayComponent } from './deliverydisplay.component';

describe('DeliverydisplayComponent', () => {
  let component: DeliverydisplayComponent;
  let fixture: ComponentFixture<DeliverydisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverydisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

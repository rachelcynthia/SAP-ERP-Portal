import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingDisplayComponent } from './aging-display.component';

describe('AgingDisplayComponent', () => {
  let component: AgingDisplayComponent;
  let fixture: ComponentFixture<AgingDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgingDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

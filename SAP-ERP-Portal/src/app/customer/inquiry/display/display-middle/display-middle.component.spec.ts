import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMiddleComponent } from './display-middle.component';

describe('DisplayMiddleComponent', () => {
  let component: DisplayMiddleComponent;
  let fixture: ComponentFixture<DisplayMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoDisplayComponent } from './memo-display.component';

describe('MemoDisplayComponent', () => {
  let component: MemoDisplayComponent;
  let fixture: ComponentFixture<MemoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

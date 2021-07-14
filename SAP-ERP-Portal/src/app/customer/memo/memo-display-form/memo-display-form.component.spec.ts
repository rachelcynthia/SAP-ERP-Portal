import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoDisplayFormComponent } from './memo-display-form.component';

describe('MemoDisplayFormComponent', () => {
  let component: MemoDisplayFormComponent;
  let fixture: ComponentFixture<MemoDisplayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoDisplayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

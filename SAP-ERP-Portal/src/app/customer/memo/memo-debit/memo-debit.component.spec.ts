import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoDebitComponent } from './memo-debit.component';

describe('MemoDebitComponent', () => {
  let component: MemoDebitComponent;
  let fixture: ComponentFixture<MemoDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

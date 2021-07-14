import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderDisplayComponent } from './sales-order-display.component';

describe('SalesOrderDisplayComponent', () => {
  let component: SalesOrderDisplayComponent;
  let fixture: ComponentFixture<SalesOrderDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOrderDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

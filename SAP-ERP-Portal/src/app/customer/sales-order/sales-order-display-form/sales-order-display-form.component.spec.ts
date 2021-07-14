import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderDisplayFormComponent } from './sales-order-display-form.component';

describe('SalesOrderDisplayFormComponent', () => {
  let component: SalesOrderDisplayFormComponent;
  let fixture: ComponentFixture<SalesOrderDisplayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOrderDisplayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

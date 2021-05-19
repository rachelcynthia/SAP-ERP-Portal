import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCodeComponent } from './about-code.component';

describe('AboutCodeComponent', () => {
  let component: AboutCodeComponent;
  let fixture: ComponentFixture<AboutCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setp2Component } from './setp2.component';

describe('Setp2Component', () => {
  let component: Setp2Component;
  let fixture: ComponentFixture<Setp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Setp2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Setp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

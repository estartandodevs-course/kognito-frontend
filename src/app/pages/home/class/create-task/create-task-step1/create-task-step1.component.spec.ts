import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskStep1Component } from './create-task-step1.component';

describe('CreateTaskStep1Component', () => {
  let component: CreateTaskStep1Component;
  let fixture: ComponentFixture<CreateTaskStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTaskStep1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTaskStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

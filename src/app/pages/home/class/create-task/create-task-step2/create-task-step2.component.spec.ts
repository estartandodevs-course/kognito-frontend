import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskStep2Component } from './create-task-step2.component';

describe('CreateTaskStep2Component', () => {
  let component: CreateTaskStep2Component;
  let fixture: ComponentFixture<CreateTaskStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTaskStep2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTaskStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

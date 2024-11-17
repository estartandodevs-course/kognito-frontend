import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskStep3Component } from './create-task-step3.component';

describe('CreateTaskStep3Component', () => {
  let component: CreateTaskStep3Component;
  let fixture: ComponentFixture<CreateTaskStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTaskStep3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTaskStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

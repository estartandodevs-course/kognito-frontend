import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTeacherComponent } from './task-teacher.component';

describe('TaskTeacherComponent', () => {
  let component: TaskTeacherComponent;
  let fixture: ComponentFixture<TaskTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskTeacherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

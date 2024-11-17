import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTasksComponent } from './class-tasks.component';

describe('ClassTasksComponent', () => {
  let component: ClassTasksComponent;
  let fixture: ComponentFixture<ClassTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassTasksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

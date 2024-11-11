import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxTaskComponent } from './checkbox-task.component';

describe('CheckBoxTaskComponent', () => {
  let component: CheckBoxTaskComponent;
  let fixture: ComponentFixture<CheckBoxTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckBoxTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckBoxTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

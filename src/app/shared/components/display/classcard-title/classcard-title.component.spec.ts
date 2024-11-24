import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasscardTitleComponent } from './classcard-title.component';

describe('ClasscardTitleComponent', () => {
  let component: ClasscardTitleComponent;
  let fixture: ComponentFixture<ClasscardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasscardTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClasscardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

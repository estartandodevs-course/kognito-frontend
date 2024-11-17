import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffensiveComponent } from './offensive.component';

describe('OffensiveComponent', () => {
  let component: OffensiveComponent;
  let fixture: ComponentFixture<OffensiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffensiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OffensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

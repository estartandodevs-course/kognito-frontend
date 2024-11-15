import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuroTagsComponent } from './neuro-tags.component';

describe('NeuroTagsComponent', () => {
  let component: NeuroTagsComponent;
  let fixture: ComponentFixture<NeuroTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeuroTagsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NeuroTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConquestComponent } from './conquest.component';

describe('ConquestComponent', () => {
  let component: ConquestComponent;
  let fixture: ComponentFixture<ConquestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConquestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsComponent } from 'app/shared/components/interface/steps/steps.component';
import { StepLineComponent } from './step-line.component';

describe('StepsComponent', () => {
  let component: StepLineComponent;
  let fixture: ComponentFixture<StepLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepLineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

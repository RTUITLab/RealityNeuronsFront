import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsTimelineComponent } from './steps-timeline.component';

describe('StepsTimelineComponent', () => {
  let component: StepsTimelineComponent;
  let fixture: ComponentFixture<StepsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

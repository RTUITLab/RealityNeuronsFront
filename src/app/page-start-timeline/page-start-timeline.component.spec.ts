import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStartTimelineComponent } from './page-start-timeline.component';

describe('PageStartTimelineComponent', () => {
  let component: PageStartTimelineComponent;
  let fixture: ComponentFixture<PageStartTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStartTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStartTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

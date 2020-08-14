import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNameClassTimelineComponent } from './page-name-class-timeline.component';

describe('PageNameClassTimelineComponent', () => {
  let component: PageNameClassTimelineComponent;
  let fixture: ComponentFixture<PageNameClassTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNameClassTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNameClassTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNameClassComponent } from './page-name-class.component';

describe('PageNameClassComponent', () => {
  let component: PageNameClassComponent;
  let fixture: ComponentFixture<PageNameClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNameClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNameClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

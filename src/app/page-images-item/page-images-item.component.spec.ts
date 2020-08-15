import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImagesItemComponent } from './page-images-item.component';

describe('PageImagesItemComponent', () => {
  let component: PageImagesItemComponent;
  let fixture: ComponentFixture<PageImagesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageImagesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImagesComponent } from './page-images.component';

describe('PageImagesComponent', () => {
  let component: PageImagesComponent;
  let fixture: ComponentFixture<PageImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

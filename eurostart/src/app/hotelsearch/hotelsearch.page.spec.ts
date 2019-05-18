import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsearchPage } from './hotelsearch.page';

describe('HotelsearchPage', () => {
  let component: HotelsearchPage;
  let fixture: ComponentFixture<HotelsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

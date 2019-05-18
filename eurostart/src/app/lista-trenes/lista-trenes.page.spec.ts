import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrenesPage } from './lista-trenes.page';

describe('ListaTrenesPage', () => {
  let component: ListaTrenesPage;
  let fixture: ComponentFixture<ListaTrenesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTrenesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

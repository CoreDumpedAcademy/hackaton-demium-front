import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListahotelesPage } from './listahoteles.page';

describe('ListahotelesPage', () => {
  let component: ListahotelesPage;
  let fixture: ComponentFixture<ListahotelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListahotelesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListahotelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

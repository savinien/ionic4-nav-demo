import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiraffePage } from './giraffe.page';

describe('GiraffePage', () => {
  let component: GiraffePage;
  let fixture: ComponentFixture<GiraffePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiraffePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiraffePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

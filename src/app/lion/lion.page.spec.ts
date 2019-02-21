import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LionPage } from './lion.page';

describe('LionPage', () => {
  let component: LionPage;
  let fixture: ComponentFixture<LionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

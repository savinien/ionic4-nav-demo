import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebraPage } from './zebra.page';

describe('ZebraPage', () => {
  let component: ZebraPage;
  let fixture: ComponentFixture<ZebraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZebraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZebraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

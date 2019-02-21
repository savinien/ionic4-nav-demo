import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyLionPage } from './baby-lion.page';

describe('BabyLionPage', () => {
  let component: BabyLionPage;
  let fixture: ComponentFixture<BabyLionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyLionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyLionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

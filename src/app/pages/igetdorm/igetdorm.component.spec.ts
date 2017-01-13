/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IgetdormComponent } from './igetdorm.component';

describe('IgetdormComponent', () => {
  let component: IgetdormComponent;
  let fixture: ComponentFixture<IgetdormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgetdormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgetdormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

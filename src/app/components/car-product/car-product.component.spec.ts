import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProductComponent } from './car-product.component';

describe('CarProductComponent', () => {
  let component: CarProductComponent;
  let fixture: ComponentFixture<CarProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarProductComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

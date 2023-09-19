import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemToCartComponent } from './add-item-to-cart.component';

describe('AddItemToCartComponent', () => {
  let component: AddItemToCartComponent;
  let fixture: ComponentFixture<AddItemToCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemToCartComponent],
    });
    fixture = TestBed.createComponent(AddItemToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

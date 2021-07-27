import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCartDeliveryComponent } from './pizza-cart-delivery.component';

describe('PizzaCartDeliveryComponent', () => {
  let component: PizzaCartDeliveryComponent;
  let fixture: ComponentFixture<PizzaCartDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaCartDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCartDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

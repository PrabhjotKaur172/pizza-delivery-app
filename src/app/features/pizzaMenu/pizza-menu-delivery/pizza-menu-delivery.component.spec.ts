import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMenuDeliveryComponent } from './pizza-menu-delivery.component';

describe('PizzaMenuDeliveryComponent', () => {
  let component: PizzaMenuDeliveryComponent;
  let fixture: ComponentFixture<PizzaMenuDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaMenuDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMenuDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMenuItemDetailDeliveryComponent } from './pizza-menu-item-detail-delivery.component';

describe('PizzaMenuItemDetailDeliveryComponent', () => {
  let component: PizzaMenuItemDetailDeliveryComponent;
  let fixture: ComponentFixture<PizzaMenuItemDetailDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaMenuItemDetailDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMenuItemDetailDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

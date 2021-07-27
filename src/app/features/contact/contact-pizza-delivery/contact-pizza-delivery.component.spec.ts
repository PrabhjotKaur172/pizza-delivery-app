import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPizzaDeliveryComponent } from './contact-pizza-delivery.component';

describe('ContactPizzaDeliveryComponent', () => {
  let component: ContactPizzaDeliveryComponent;
  let fixture: ComponentFixture<ContactPizzaDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPizzaDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPizzaDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

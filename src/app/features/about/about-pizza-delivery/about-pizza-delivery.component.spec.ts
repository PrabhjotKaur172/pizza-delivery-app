import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPizzaDeliveryComponent } from './about-pizza-delivery.component';

describe('AboutPizzaDeliveryComponent', () => {
  let component: AboutPizzaDeliveryComponent;
  let fixture: ComponentFixture<AboutPizzaDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPizzaDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPizzaDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

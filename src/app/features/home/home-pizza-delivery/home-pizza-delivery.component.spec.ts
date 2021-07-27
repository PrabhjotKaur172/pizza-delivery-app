import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePizzaDeliveryComponent } from './home-pizza-delivery.component';

describe('HomePizzaDeliveryComponent', () => {
  let component: HomePizzaDeliveryComponent;
  let fixture: ComponentFixture<HomePizzaDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePizzaDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePizzaDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

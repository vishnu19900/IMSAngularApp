import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersupdateComponent } from './ordersupdate.component';

describe('OrdersupdateComponent', () => {
  let component: OrdersupdateComponent;
  let fixture: ComponentFixture<OrdersupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersupdateComponent]
    });
    fixture = TestBed.createComponent(OrdersupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

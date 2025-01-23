import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePurchasesComponent } from './update-purchases.component';

describe('UpdatePurchasesComponent', () => {
  let component: UpdatePurchasesComponent;
  let fixture: ComponentFixture<UpdatePurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePurchasesComponent]
    });
    fixture = TestBed.createComponent(UpdatePurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

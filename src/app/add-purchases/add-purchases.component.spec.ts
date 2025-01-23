import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchasesComponent } from './add-purchases.component';

describe('AddPurchasesComponent', () => {
  let component: AddPurchasesComponent;
  let fixture: ComponentFixture<AddPurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPurchasesComponent]
    });
    fixture = TestBed.createComponent(AddPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

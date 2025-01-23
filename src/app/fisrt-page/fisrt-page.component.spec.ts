import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisrtPageComponent } from './fisrt-page.component';

describe('FisrtPageComponent', () => {
  let component: FisrtPageComponent;
  let fixture: ComponentFixture<FisrtPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FisrtPageComponent]
    });
    fixture = TestBed.createComponent(FisrtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

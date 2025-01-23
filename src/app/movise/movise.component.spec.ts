import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviseComponent } from './movise.component';

describe('MoviseComponent', () => {
  let component: MoviseComponent;
  let fixture: ComponentFixture<MoviseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviseComponent]
    });
    fixture = TestBed.createComponent(MoviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

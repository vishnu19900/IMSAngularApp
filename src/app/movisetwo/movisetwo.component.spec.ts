import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovisetwoComponent } from './movisetwo.component';

describe('MovisetwoComponent', () => {
  let component: MovisetwoComponent;
  let fixture: ComponentFixture<MovisetwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovisetwoComponent]
    });
    fixture = TestBed.createComponent(MovisetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdoperatonComponent } from './curdoperaton.component';

describe('CurdoperatonComponent', () => {
  let component: CurdoperatonComponent;
  let fixture: ComponentFixture<CurdoperatonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurdoperatonComponent]
    });
    fixture = TestBed.createComponent(CurdoperatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

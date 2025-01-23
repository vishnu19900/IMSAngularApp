import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCurdoperationComponent } from './re-curdoperation.component';

describe('ReCurdoperationComponent', () => {
  let component: ReCurdoperationComponent;
  let fixture: ComponentFixture<ReCurdoperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReCurdoperationComponent]
    });
    fixture = TestBed.createComponent(ReCurdoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

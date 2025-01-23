import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReReactiveFormComponent } from './re-reactive-form.component';

describe('ReReactiveFormComponent', () => {
  let component: ReReactiveFormComponent;
  let fixture: ComponentFixture<ReReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReReactiveFormComponent]
    });
    fixture = TestBed.createComponent(ReReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

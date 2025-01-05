import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValiadationComponent } from './reactive-form-valiadation.component';

describe('ReactiveFormValiadationComponent', () => {
  let component: ReactiveFormValiadationComponent;
  let fixture: ComponentFixture<ReactiveFormValiadationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormValiadationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormValiadationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

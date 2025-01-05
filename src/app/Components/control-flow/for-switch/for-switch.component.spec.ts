import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSwitchComponent } from './for-switch.component';

describe('ForSwitchComponent', () => {
  let component: ForSwitchComponent;
  let fixture: ComponentFixture<ForSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

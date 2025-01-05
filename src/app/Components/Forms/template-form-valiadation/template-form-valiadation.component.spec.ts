import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormValiadationComponent } from './template-form-valiadation.component';

describe('TemplateFormValiadationComponent', () => {
  let component: TemplateFormValiadationComponent;
  let fixture: ComponentFixture<TemplateFormValiadationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormValiadationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormValiadationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

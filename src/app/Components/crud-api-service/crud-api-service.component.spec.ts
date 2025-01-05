import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudApiServiceComponent } from './crud-api-service.component';

describe('CrudApiServiceComponent', () => {
  let component: CrudApiServiceComponent;
  let fixture: ComponentFixture<CrudApiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudApiServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudApiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

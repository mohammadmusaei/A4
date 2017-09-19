import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationExampleComponent } from './validation-example.component';

describe('ValidationExampleComponent', () => {
  let component: ValidationExampleComponent;
  let fixture: ComponentFixture<ValidationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

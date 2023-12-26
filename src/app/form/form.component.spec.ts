import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [FormsModule] // Import the FormsModule for ngModel
    })
    .compileComponents();
  });


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent]
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle form submission', () => {
    const form = {
      valid: true, // Mocking a valid form
      // Mocking other necessary properties
    };

    spyOn(component, 'submitForm'); // Spy on the submitForm method

    component.submitForm(form);

    expect(component.submitForm).toHaveBeenCalledWith(form);
  });
});

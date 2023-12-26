import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: any = {}; // Initialize an empty object to store form data

  submitForm(form: any): void {
    if (form.valid) {
      // Form is valid, process the form data
      console.log('Form submitted with data:', this.formData);

      // Here, you can send the form data to a server or perform any other required actions
      // For demonstration purposes, we'll just log the data to the console.
    } else {
      // Form is invalid, display validation errors if any
      console.log('Form is invalid. Please check the fields for errors.');
    }
  }
}

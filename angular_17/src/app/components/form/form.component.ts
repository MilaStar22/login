import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  name = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    ocupation: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onChangeInputValue(): string {
    let changedName = this.name.value;
    return changedName = 'kjkjb';
  }

  onValueChange(): void {
    this.name.setValue('Mila');
  }

  showData(): string {
    let name = this.profileForm.value.firstName;
    let surname = this.profileForm.value.lastName;
    let ocupation = this.profileForm.value.ocupation;
    return `${name} ${surname} is ${ocupation}`
  }

  onSubmit(): void {
    console.warn(this.profileForm.value);
    this.showData();
  }

  onClick(): void {
    console.warn('button clicked');
  }

  // update the value(s) in group control -> use patchValue
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'McCollagen',
      ocupation: 'Data science'
    });
  }
}

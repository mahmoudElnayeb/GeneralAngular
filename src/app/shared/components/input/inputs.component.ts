import { CommonModule } from '@angular/common';
import { Component, computed, forwardRef, Input, input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsComponent),
      multi: true,
    },
  ],
})
export class InputsComponent implements ControlValueAccessor {
  type = input.required<'text' | 'number' | 'password' | 'email'>();
  placeholder = input.required<string>();
  icon = input<string>();
  errorMessage: string = '';
  closedEye: boolean = true;
  value: string = '';
  control = input<FormControl>(); // Binding to FormControl

  @Input() errorMessages: any = {
    required: 'This field is required.',
    email: 'Please enter a valid email address.',
    pattern: 'Invalid format.',
  };

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  touched: boolean = false;

  ngOnInit() {
    if (this.control()) {
      this.control()?.statusChanges.subscribe(() => {
        this.validateInput();
      });
    }
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
      this.validateInput(); // validate the initial value when the component is created
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.touched = true;
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.validateInput(); // validate the input value when it changes
    this.onChange(this.value); // notify Angular of the value change
  }

  validateInput() {
    if (this.control()?.hasError('email') && this.control()?.dirty) {
      this.errorMessage = this.errorMessages?.email;
    } else if (this.control()?.hasError('required') && this.control()?.dirty) {
      this.errorMessage = this.errorMessages?.required;
    } else if (this.control()?.hasError('pattern') && this.control()?.dirty) {
      this.errorMessage = this.errorMessages?.pattern;
    } else if (this.control()?.hasError('password') && this.control()?.dirty) {
      this.errorMessage = this.errorMessages?.password;
    } else if (this.control()?.hasError('minlength') && this.control()?.dirty) {
      const minLength = this.control()?.getError('minlength')?.requiredLength;
      this.errorMessage = this.errorMessages?.minlength + minLength;
    } else {
      this.errorMessage = ''; // Clear error if no validation errors
    }
  }

  toggleEye(): void {
    this.closedEye = !this.closedEye;
  }

  markAsTouched(): void {
    this.touched = true;
    this.onTouched(); // notify Angular that the control has been touched
  }
}

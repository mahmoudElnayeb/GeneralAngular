import { CommonModule } from '@angular/common';
import { Component, computed, forwardRef, Input, input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-inputs',
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
  type = input.required<'text' | 'number' | 'password'>();
  placeholder = input.required<string>();
  icon = input<string>();
  @Input() disabled: boolean = false;
  value = input<string | number>();
  errorMessage: string = '';
  closedEye: boolean = true;
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validateInput() {
    if (this.value() === '') {
      this.errorMessage = 'Input cannot be empty';
    } else {
      this.errorMessage = '';
    }
  }

  toggleEye(): void {
    this.closedEye = !this.closedEye;
  }
}

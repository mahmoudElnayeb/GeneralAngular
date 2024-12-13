import { Component, computed, input, output } from '@angular/core';
import { ButtonColor, ButtonType } from '../../../types/button.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  type = input<ButtonType>('button');
  title = input<string>('Submit');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  variant = input<ButtonColor>('primary');
  onClick = output<boolean>();
  size=input<'large' | 'medium' | 'small'>('medium'); 
  outline = input<boolean>(false)

  click(): void {
    !(this.loading() || this.disabled()) && this.onClick.emit(true);
  }
}

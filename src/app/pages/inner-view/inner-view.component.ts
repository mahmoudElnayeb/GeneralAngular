import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inner-view',
  imports: [RouterOutlet],
  templateUrl: './inner-view.component.html',
  styleUrl: './inner-view.component.scss',
})
export class InnerViewComponent {}

import { Component } from '@angular/core';
import { HeaderComponent } from '../../sharedModules/components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../sharedModules/components/footer/footer.component';

@Component({
  selector: 'app-inner-view',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './inner-view.component.html',
  styleUrl: './inner-view.component.scss',
})
export class InnerViewComponent {}

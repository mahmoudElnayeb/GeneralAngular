import { Component, OnInit } from '@angular/core';

import { InnerViewComponent } from './pages/inner-view/inner-view.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sharedModules/components/header/header.component';
import { FooterComponent } from './sharedModules/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InnerViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  title = 'App2025';

  click(event: boolean) {
    console.log('click', event);
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark');
    }
  }
}

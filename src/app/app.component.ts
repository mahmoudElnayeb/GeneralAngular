import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from "./sharedModules/components/buttons/buttons.component";
import { InputsComponent } from "./sharedModules/components/input/inputs.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonsComponent, InputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      // // Check the user's system theme preference (optional)
      // const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
      // // Set dark theme as default
      // const theme = prefersDarkMode ? 'dark' : 'dark';  // Force dark theme if you want it always
  
      // // Set the theme to dark on initial load (if you want to dynamically change this)
      // document.documentElement.setAttribute('data-theme', theme);
  }
  title = 'App2025';

  click(event:boolean){
    console.log("click",event);
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark');
    }
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from "./sharedModules/components/buttons/buttons.component";
import { InputsComponent } from "./sharedModules/components/input/inputs.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonsComponent, InputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'App2025';

  click(event:boolean){
    console.log("click",event);
  }
}

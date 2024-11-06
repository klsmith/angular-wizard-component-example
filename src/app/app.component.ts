import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WizardComponent} from "./wizard/wizard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WizardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-wizard-component-example';
}

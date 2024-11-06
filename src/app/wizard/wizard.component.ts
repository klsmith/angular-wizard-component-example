import {Component, ElementRef, Input, TemplateRef} from '@angular/core';
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";

export interface WizardStep {
  title: string;
  template: TemplateRef<any>;
}

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgForOf,
    NgIf
  ],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})
export class WizardComponent {

  @Input() steps: WizardStep[] = [];

  _stepIndex: number = 0;

  get selectedStep(): WizardStep | null {
    return (this.steps.length > this._stepIndex)
      ? this.steps[this._stepIndex]
      : null;
  }

  onStepButtonClick(index: number): void {
    this._stepIndex = index;
  }

  hasNext(): boolean {
    return this._stepIndex + 1 < this.steps.length
      && this.steps.length > 0;
  }

  next(): void {
    if (this.hasNext()) {
      this._stepIndex++;
    }
  }

  hasPrevious(): boolean {
    return this._stepIndex - 1 >= 0
      && this.steps.length > 0;
  }

  previous(): void {
    if (this.hasPrevious()) {
      this._stepIndex--;
    }
  }

  goToStep(index: number): void {
    this._stepIndex = index;
  }

}

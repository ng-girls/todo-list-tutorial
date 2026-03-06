import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],

  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
           [value]="title"
           (keyup.enter)="changeTitle($event.target.value)">
    <button (click)="changeTitle(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent {
  title = 'Hello World';

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}

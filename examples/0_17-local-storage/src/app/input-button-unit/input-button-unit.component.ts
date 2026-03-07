import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [],

  selector: 'app-input-button-unit',
  template: `
    <input class="todo-input"
           #inputElementRef
           [value]="title"
           (keyup.enter)="submitValue($event.target.value)">
    <button class="btn"
            (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title = 'Hello World';

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}

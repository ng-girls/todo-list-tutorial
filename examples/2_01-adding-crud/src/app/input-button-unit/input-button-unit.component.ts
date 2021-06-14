import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="todo-input"
           #todoItem
           [value]="title"
           (keyup.enter)="submitValue(todoItem.value); todoItem.value = ''">

    <button mat-raised-button
            color="primary"
            (click)="submitValue(todoItem.value); todoItem.value = ''">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';

  constructor() {
  }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    if (newTitle) {
      this.submit.emit(newTitle);
    } else {
      alert('Value cannot be empty');
    }
  }
}

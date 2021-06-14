import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';

  submitValue(newTitleForm: NgForm) {
    if (newTitleForm.valid) {
      this.submit.emit(newTitleForm.value.title);
      newTitleForm.resetForm();
    } else {
      alert('Form is invalid');
    }
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from './../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      <input type="checkbox"
             class="todo-checkbox"
             [checked]="item.completed"
             (click)="completeItem()"/>
      <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
        {{ item.title }}
      </span>

      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }

  removeItem() {
    this.remove.emit(this.item);
  }
}

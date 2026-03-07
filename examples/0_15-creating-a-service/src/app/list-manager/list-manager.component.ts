import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Component } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  standalone: true,
  imports: [InputButtonUnitComponent, TodoItemComponent],

  selector: 'app-list-manager',
  template: `
    <div class="todo-app">
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

      <ul>
        @for(todoItem of todoList; track todoItem.title) {
          <li>
            <app-todo-item [item]="todoItem"></app-todo-item>
          </li>
        }
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent {
  todoList!: TodoItem[];

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoList.push({ title });
  }

}

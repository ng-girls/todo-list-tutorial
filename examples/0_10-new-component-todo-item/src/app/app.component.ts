import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [InputButtonUnitComponent, TodoItemComponent],

  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <app-input-button-unit></app-input-button-unit>

    <ul>
      @for(todoItem of todoList; track todoItem.title) {
        <li>
          <app-todo-item [item]="todoItem"></app-todo-item>
        </li>
      }
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}

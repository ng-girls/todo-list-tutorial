import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { changeCompletedStatus, deleteTodoItem, setNewItem } from 'src/app/store/todo-list/actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-list-manager',
  template: `
    <div class="todo-app">
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

      <ul *ngIf="todoList | async as todoItems">
        <li *ngFor="let todoItem of todoItems">
          <app-todo-item [item]="todoItem"
                         (remove)="removeItem($event)"
                         (update)="updateItem($event.item, $event.changes)"></app-todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  todoList: Observable<TodoItem[]>;

  constructor(private todoListService: TodoListService, private store: Store<State>) {
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.store.dispatch(setNewItem({item: {_id: uuid(), title: title, completed: false}}));
    // this.todoListService.addItem({title});
  }

  removeItem(item) {
    this.store.dispatch(deleteTodoItem({id: item._id}));
    // this.todoListService.deleteItem(item);
  }

  updateItem(item, changes) {
    this.store.dispatch(changeCompletedStatus({id: item._id, completed: changes}));
    // this.todoListService.updateItem(item, changes);
  }
}

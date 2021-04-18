# \#13: 🚧 Refactor App Component

We're going to perform a small refactoring. The `todo-root` shouldn't have such a large template and all this logic. It should just call another component that will deal with that.

* Create a new component called `list-manager` and configure inline-template.
* Move the code from `AppComponent` to `ListManagerComponent`.
* Be careful not to change the list manager component's class name!

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <todo-input (submit)="addItem($event)"></todo-input>

    <ul>
      <li *ngFor="let item of todoList">
        <todo-item [todoItem]="item"></todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'todo';

  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string): void {
    this.todoList.push({ title });
  }
}
```
{% endcode %}

* Call the new component from the `AppComponent` template:

{% code title="src/app/app.component.ts" %}
```typescript
  template: `
    <todo-list-manager></todo-list-manager>
  `,
```
{% endcode %}

That's it! Now we can go on.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-12_Refactor_App_Component)
{% endhint %}


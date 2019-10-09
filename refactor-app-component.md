# \#13: 🚧 Refactor App Component

We're going to perform a small refactoring. The `app-root` shouldn't have such a large template and all this logic. It should just call another component that will deal with that.

- Create a new component called `list-manager`:

```bash
ng g c list-manager
```

{% hint style="info" %}
**StackBlitz Instructions** ![](.gitbook/assets/stackblitz-hint.svg)

Use the Angular Generator to create the component, then make the component [use an inline template](https://ng-girls.gitbook.io/todo-list-tutorial/component#inline-template). Continue with the remaining instructions on this page.
{% endhint %}

- Move all the code from `app-root` to `list-manager`.
- You can keep the title in app-root, and give it a nice value.
- Be careful not to change the list manager component's class name!

{% code-tabs %}
{% code-tabs-item title="src/app/app.component.ts" %}

```typescript
@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List APP';
}
```

{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="src/app/list-manager/list-manager.component.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  template: `
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' }
  ];

  constructor() {}

  ngOnInit() {}

  addItem(title: string): void {
    this.todoList.push({ title });
  }
}
```

{% endcode-tabs-item %}
{% endcode-tabs %}

- Call the new component from the `app-root` template:

{% code-tabs %}
{% code-tabs-item title="src/app/app.component.ts" %}

```markup
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
  `,
```

{% endcode-tabs-item %}
{% endcode-tabs %}

That's it! Now we can go on.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/13-refactor-app-component)
{% endhint %}

# #13: 🚧 Refactor App Component

We're going to perform a small refactoring. The `app-root` shouldn't have such a large template and all this logic. It should just call another component that will deal with that.

* Create a new component called `list-manager`:&#x20;

```bash
ng g c list-manager
```

{% hint style="info" %}
**StackBlitz Instructions** ![](<../.gitbook/assets/stackblitz-hint (1) (2).svg>)

Use the Angular Generator to create the component, then make the component [use an inline template](https://ng-girls.gitbook.io/todo-list-tutorial/component#inline-template). Continue with the remaining instructions on this page.
{% endhint %}

* Move all the code from `app-root` to `list-manager`. &#x20;
* You can keep the title in app-root, and give it a nice value.
* Be careful not to change the list manager component's class name!

{% code title="src/app/app.component.ts" %}
```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My To-Do List App';
}
```
{% endcode %}

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [CommonModule],
  template: `
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      @for(let todoItem of todoList; track todoItem.title) {
        <li>
          <app-todo-item [item]="todoItem"></app-todo-item>
        </li>
      }       
    </ul>
  `,
  styleUrl: './list-manager.component.scss'
})
export class ListManagerComponent {
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {    
    this.todoList.push({ title });
  }
}
```
{% endcode %}

* Call the new component from the `app-root` template:

{% code title="src/app/app.component.ts" %}
```markup
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
  `,
```
{% endcode %}

That's it! Now we can go on.

{% hint style="info" %}
💾 **Save your code to GitHub**

StackBlitz users - press **Save** in the toolbar and continue to the next section of the tutorial.

Commit all your changes by running this command in your project directory.

```
git add -A && git commit -m "Your Message"
```

Push your changes to GitHub by running this command in your project directory.

```
git push
```
{% endhint %}

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_13-refactor-app-component)
{% endhint %}

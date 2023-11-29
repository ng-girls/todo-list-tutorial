# #15: 🔋 Creating a Service

In Angular, a service is (typically) a JavaScript class that's responsible for performing a specific task needed by your application. In our todo-list application, we'll create a service that will be responsible for saving and managing all the tasks, and we'll use it by injecting it into the components.

## Create a service with the Angular CLI:

```
ng g s services/todo-list
```

{% hint style="info" %}
**StackBlitz Instructions** ![](<../.gitbook/assets/stackblitz-hint (1) (2).svg>)

Create the `services` folder inside the `app` folder. Then use the Angular Generator to create the service named `todo-list`.
{% endhint %}

This command will generate the service in the file `src/app/services/todo-list.service.ts`. The service is a simple Class called `TodoListService`. It has the decorator `@Injectable` which allows it to use Dependency Injection.

{% code title="src/app/services/todo-list.service.ts" %}
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }
}
```
{% endcode %}

## Share data

Now we can move the `todoList` array from `ListManagerComponent` to our new service. Go to the generated service file, `src/app/services/todo-list.service.ts`, and add this code inside the `TodoListService` class just above the `constructor`:

{% code title="src/app/services/todo-list.service.ts" %}
```typescript
private todoList: TodoItem[] = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];
```
{% endcode %}

Make sure that the TodoItem interface is imported:

{% code title="src/app/services/todo-list.service.ts" %}
```typescript
import { TodoItem } from '../interfaces/todo-item';
```
{% endcode %}

## Create a method to return the list

We'll add a `getTodoList` method that will return the `todoList` array. The service will look like this:

{% code title="src/app/services/todo-list.service.ts" %}
```typescript
import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() { }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }
}
```
{% endcode %}

## Inject and use the service

After creating the service, we can inject it into our `list-manager` component. In Angular Dependency Injection is very simple. We pass it as a parameter in the constructor - the parameter's type is the class name of the service. Angular assigns the instance it created to the parameter name, and we can use it from within the constructor. Before implementing it ourselves, let's see how it works:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
constructor(todoListService: TodoListService) {
  todoListService.getTodoList();
}
```
{% endcode %}

Typescript helps us furthermore by giving a shortcut for assigning the parameter to a class member. By adding `private` or `public` before the parameter name it is automatically assigned to `this`. So instead of declaring and assigning the property by ourselves:

```typescript
export class ListManagerComponent implements OnInit {
  todoListService: TodoListService;

  constructor(todoListService: TodoListService) { 
    this.todoListService = todoListService;
  }
}
```

...we can reduce a lot of code like this:

```typescript
export class ListManagerComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }
}
```

So let's go on and use the service in the `list-manager` component.

* Remove the hard-coded list from the component, keep only the `todoList` property declaration.
* Inject the `TodoListService` using the constructor.&#x20;

```typescript
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) { }
```

* Make sure the `TodoListService` is imported.

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
import { TodoListService } from '../services/todo-list.service';
```
{% endcode %}

* Get the list from the service in the `ngOnInit` method.

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
ngOnInit() {
  this.todoList = this.todoListService.getTodoList();
}
```
{% endcode %}

You don't need to change anything in the template since we're assigning the list to the same property we used before. Seems like nothing has changed, but you can check that the list comes from the service by changing it from there (adding an item, changing a title, etc.).

If the list is not shown and no error occures in the compilation, the project might not be synced with the addition of the service file. Stop the running of `ng serve` in the terminal by clickin `Ctrl+C` and run it again.&#x20;

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
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_15-creating-a-service)
{% endhint %}

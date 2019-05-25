# \#15:  🔋 Creating a Service

In Angular, a service is \(typically\) a JavaScript class that's responsible for performing a specific task needed by your application. In our todo-list application, we'll use a service to save all the tasks, and use it by injecting it into the components.

## Create the service

In order to create a new service with the Angular CLI, make sure you're in the root folder of your application, then right click and select service as option. Name the service ```todoList```. 

It will generate the service and put it under `src/app/todo-list.service.ts`. It has the decorator `@Injectable` which allows it to use Dependency Injection.

## Make the service a provider

To start using the service, we first need to _provide_ it in an ngModule. Start by adding this code in ![](.gitbook/assets/module.svg) **src/app/app.module.ts**:

{% code-tabs %}
{% code-tabs-item title="src/app/app.module.ts" %}
```typescript
import { TodoListService } from './todo-list.service';
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Next, add the service to the `providers` array, so that the ngModule looks like this:

{% code-tabs %}
{% code-tabs-item title="src/app/app.module.ts:" %}
```typescript
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
{% endcode-tabs-item %}
{% endcode-tabs %}

This tells Angular to provide \(that is, create and inject\) an instance of our service when we ask for it anywhere in our application.

## Move the todo list from component to service

We now need to move the `todoList` array from `ListManagerComponent` to our new service. Go to the generated service file, ![](.gitbook/assets/service.svg)**todo-list.service.ts**, and add this code just above the constructor:

{% code-tabs %}
{% code-tabs-item title="src/app/todo-list.service.ts" %}
```typescript
  private todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Create a method to return the list

Now add a `getTodoList` method that will return the `todoList` array. The service will look like this:

{% code-tabs %}
{% code-tabs-item title="src/app/todo-list.service.ts" %}
```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

  private todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  constructor() { }

  getTodoList() {
    return this.todoList;
  }
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Inject and use the service

After creating the service, we can inject it into our list-manager component. Go to the folder 📁 **src/app/list-manager/** ![](.gitbook/assets/component.svg) **list-manager.component.ts** and add the following import code:

{% code-tabs %}
{% code-tabs-item title="src/app/list-manager/list-manager.component.ts" %}
```typescript
import { TodoListService } from '../todo-list.service';
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Now remove the `todoList` array, but keep the `todoList` member:

{% code-tabs %}
{% code-tabs-item title="src/app/list-manager/list-manager.component.ts" %}
```typescript
  todoList;
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Change the constructor to be:

{% code-tabs %}
{% code-tabs-item title="src/app/list-manager/list-manager.component.ts" %}
```typescript
constructor(private todoListService:TodoListService) { }
```
{% endcode-tabs-item %}
{% endcode-tabs %}

And now use the service to assign the `todoList` array inside the `ngOnInit` method:

{% code-tabs %}
{% code-tabs-item title="src/app/list-manager/list-manager.component.ts" %}
```typescript
ngOnInit() {
  this.todoList = this.todoListService.getTodoList();
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-14_Service)
{% endhint %}




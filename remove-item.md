# \#18: 🗑 Remove item

The user should be able to remove any item, whether it's still active or completed. Removing an item will be done by clicking a button, aptly named "remove". In this chapter, we'll learn how to add this functionality to our project.

## Add the "remove" button

First, we need to add the button to the item, so we'll work on the file  
![](.gitbook/assets/component.svg)**item.component.ts**.

Add a "remove" button to the item template, with a `click` event handler that calls a `removeItem` method \(which we'll create in a moment\):

{% code title="src/app/item/item.component.ts" %}
```typescript
template: `
  <div class="todo-item">
    {{ todoItem.title }}

    <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
  </div>
`,
```
{% endcode %}

Add a new output to the `ItemComponent` class, which will be emitted to the list manager when a user presses its remove button:

{% code title="src/app/item/item.component.ts" %}
```typescript
@Output() remove:EventEmitter<any> = new EventEmitter();
```
{% endcode %}

Make sure to import both `EventEmitter` and `Output`:

{% code title="src/app/item/item.component.ts" %}
```typescript
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
```
{% endcode %}

Add a method to the `ItemComponent` class to actually emit the event. This method will be called when the user clicks the "remove" button:

{% code title="src/app/item/item.component.ts" %}
```typescript
removeItem() {
  this.remove.emit(this.todoItem);
}
```
{% endcode %}

## Remove the todo item

Now that each todo item can emit its own removal, let's make sure that the list manager actually removes that same item from the list. For that, we'll work on the file ![](.gitbook/assets/component.svg) **list-manager.component.ts**.

We need to respond to the `remove` event. Let's add it to the template, inside the `<todo-item>` tag:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```markup
<todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
```
{% endcode %}

Now we just need to add the method `removeItem()` to the `ListManagerComponent` class:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
removeItem(item) {
  this.todoList = this.todoListService.removeItem(item);
}
```
{% endcode %}

## Remove the todo item from local storage

Removing the item is handled in the service. Open ![](.gitbook/assets/service.svg)**todo-list.service.ts** and add a method called `removeItem` to the `TodoListService` class:

{% code title="src/app/todo-list.service.ts" %}
```typescript
removeItem(item) {
  return this.storage.destroy(item);
}
```
{% endcode %}

This method calls the `destroy` method we already created in ![](.gitbook/assets/service.svg)**todo-list-storage.service.ts** earlier.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-17_Remove_item)
{% endhint %}


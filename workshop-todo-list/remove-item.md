# \#18: 🗑 Remove item

The user should be able to remove any item, whether it's still active or completed. Removing an item will be done by clicking a button, aptly named "remove". In this chapter, we'll learn how to add this functionality to our project.

## Add the "remove" button

First, we need to add the button to the item, so we'll work on the file `todo-item.component.ts`.

Add a "remove" button to the item template, with a `click` event handler that calls a `removeItem` method \(which we'll create in a moment\):

{% code title="src/app/todo-item/todo-item.component.ts" %}
```markup
template: `
  <div class="todo-item">
    {{ item.title }}

    <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
  </div>
`,
```
{% endcode %}

Add a new output to the `TodoItemComponent` class, which will emit the removed item to the list manager when a user presses its remove button:

{% code title="src/app/todo-item/todo-item.component.ts" %}
```typescript
@Output() remove: EventEmitter<TodoItem> = new EventEmitter();
```
{% endcode %}

Make sure to import both `EventEmitter` and `Output`:

{% code title="src/app/todo-item/todo-item.component.ts" %}
```typescript
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
```
{% endcode %}

Add a method to the `ItemComponent` class to actually emit the event. This method will be called when the user clicks the "remove" button:

```typescript
removeItem() {
  this.remove.emit(this.item);
}
```

## Remove the todo item

Now that each todo item can emit its own removal, let's make sure that the list manager actually removes that same item from the list. For that, we'll work on the file `list-manager.component.ts`.

We need to respond to the `remove` event. Let's add it to the template, inside the `<todo-item>` tag:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```markup
<app-todo-item [item]="todoItem"
               (remove)="removeItem($event)"></app-todo-item>
```
{% endcode %}

Now we just need to add the method `removeItem()` to the `ListManagerComponent` class, and use the `todoListService` 's method `deleteItem` which will remove the item from the list and update the local storage:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
removeItem(item) {
  this.todoListService.deleteItem(item);
}
```
{% endcode %}

{% hint style="info" %}
💾 **Save your code to GitHub**

StackBlitz users - press **Save** in the toolbar and continue to the next section of the tutorial.

Commit all your changes by running this command in your project directory.
```text
git add -A && git commit -m "Your Message"
```

Push your changes to GitHub by running this command in your project directory.
```text
git push master
```
{% endhint %}

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/18-remove-item)
{% endhint %}


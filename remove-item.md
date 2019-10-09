# \#18: 🗑 Remove item

The user should be able to remove any item, whether it's still active or completed. Removing an item will be done by clicking a button, aptly named "remove". In this chapter, we'll learn how to add this functionality to our project.

## Add the "remove" button

First, we need to add the button to the item, so we'll work on the file `todo-item.component.ts`.

Add a "remove" button to the item template, with a `click` event handler that calls a `removeItem` method \(which we'll create in a moment\):

{% code-tabs %}
{% code-tabs-item title="src/app/todo-item/todo-item.component.ts" %}

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

{% endcode-tabs-item %}
{% endcode-tabs %}

Add a new output to the `TodoItemComponent` class, which will emit the removed item to the list manager when a user presses its remove button:

{% code-tabs %}
{% code-tabs-item title="src/app/todo-item/todo-item.component.ts" %}

```typescript
@Output() remove: EventEmitter<TodoItem> = new EventEmitter();
```

{% endcode-tabs-item %}
{% endcode-tabs %}

Make sure to import both `EventEmitter` and `Output`:

{% code-tabs %}
{% code-tabs-item title="src/app/todo-item/todo-item.component.ts" %}

```typescript
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
```

{% endcode-tabs-item %}
{% endcode-tabs %}

Add a method to the `ItemComponent` class to actually emit the event. This method will be called when the user clicks the "remove" button:

```typescript
removeItem() {
  this.remove.emit(this.item);
}
```

## Remove the todo item

Now that each todo item can emit its own removal, let's make sure that the list manager actually removes that same item from the list. For that, we'll work on the file `list-manager.component.ts`.

We need to respond to the `remove` event. Let's add it to the template, inside the `<todo-item>` tag:

{% code-tabs %}
{% code-tabs-item title="src/app/list-manager/list-manager.component.ts" %}

```markup
<app-todo-item [item]="todoItem"
               (remove)="removeItem($event)"></app-todo-item>
```

{% endcode-tabs-item %}
{% endcode-tabs %}

Now we just need to add the method `removeItem()` to the `ListManagerComponent` class, and use the `todoListService` 's method `deleteItem` which will remove the item from the list and update the local storage:

{% code-tabs %}
{% code-tabs-item title="src/app/list-manager/list-manager.component.ts" %}

```typescript
removeItem(item: TodoItem) {
  this.todoListService.deleteItem(item);
}
```

{% endcode-tabs-item %}
{% endcode-tabs %}

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/18-remove-item)
{% endhint %}

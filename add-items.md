# \#12: 📌 Add items

We want to add items to our list. With Angular, we can do this easily and see the item added immediately. We will do this from within the `InputComponent` we created before. We'll change it so when hitting the Enter key or clicking the submit button, the value of the input box will become the title of the new item, and the new item will be added to the list.

But we don't want the `todo-input` component to be responsible for adding a new item to the list. We want it to have minimal responsibility, and **delegate the action to its parent component**. One of the advantages of this approach is that this component will be reusable, and can be attached to a different action in different situations.

For example, in our case, we'll be able to use the `InputComponent` inside the `ItemComponent`. Then we'll have an input box for each item and we'll be able to edit the item's title. In this case, pressing the Enter key or the Save button will have a different effect.

So what we actually want to do is to **emit an event** from the `todo-input` component whenever the title is changed. With Angular, we can easily define and emit events from our components!

## @Output\(\)

Add the following line inside the `InputComponent` class, which defines an output for the component:

{% code title="src/app/input/input.component.ts" %}
```typescript
@Output() submit: EventEmitter<string> = new EventEmitter();
```
{% endcode %}

The output property is called `submit`. It's of type `EventEmitter` which has the method `emit`. `EventEmitter` is a Generic Type - we pass to it another type which will be used internally, in this case it's `string`. It's the type of the object that will be emitted by the `emit` method.

Make sure that `Output` and `EventEmitter` are added to the import declaration in the first line of the file:

{% code title="src/app/input/input.component.ts" %}
```typescript
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
```
{% endcode %}

Now, whenever we call `this.submit.emit()`, an event will be emitted to the parent component. Let's call it in the `changeTitle` method:

{% code title="src/app/input/input.component.ts" %}
```typescript
changeTitle(newTitle: string): void {
  this.submit.emit(newTitle);
}
```
{% endcode %}

We delegate everything to the parent component - even actually changing the title of the item if needed. \(The method name may seem irrelevant right now. If you'd like, you can change it to something more appropriate, such as `submitValue`. Remember to change it in the template as well.\)

We pass `newTitle` when we emit the event. Whatever we pass in `emit()` will be available for the parent as `$event`.

Nothing else is changed in the `todo-input` component. The events emitted from `keyup.enter` and `click` still call the same method, but the method itself has changed.

Now all we need to do is catch the event in the parent component and attach logic to it. Go to the `todo-root` component and bind to the `submit` event in the `<todo-input>` component:

{% code title="src/app/app.component.ts" %}
```typescript
<todo-input (submit)="addItem($event)"></todo-input>
```
{% endcode %}

Now all that's left is to implement the `addItem` method, which receives a string and adds it to the list:

{% code title="app.component.ts" %}
```typescript
addItem(title: string): void {
  this.todoList.push({ title });
}
```
{% endcode %}

Try it out!

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-11_Add_items)
{% endhint %}


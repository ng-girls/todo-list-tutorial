# Add items

We want to add items to our list. With Angular we can do this easily and see the item added immediately. We will do this from within the `inputComponent` we created before. We'll change it so when hitting the Enter key or clicking the submit button, the value of the input box will become the title of the new item. And the new item will be added to the list.

But we don't want the todo-input component to be responsible for adding a new item for the list. We want it to have minimal responsibility, and **delegate the action to its parent component**. One of the advantages of this approach is that this component will be reusable, and can be attached to a different action in different situations. 

For example, in our case, we'll be able to use the `inputComponent` inside the `itemComponent`. Then we'll have an input box for each item and we'll be able to edit the item's title. In this case, pressing the Enter key or the save button will have a different effect.

So what we actually want to do is to **emit an event** from the todo-input component whenever the title is changed. With Angular we can easily define and emit events from our components!

## @Output()

Inside the `inputComponent` class add the following line, which defines an output for the component.

```ts
@Output() submit: EventEmitter<string> = new EventEmitter();
```

The output property is called `submit`. Make sure that Output and EventEmitter are added to the import declaration in the first line of the file: 

```ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
```

Now, whenever we call `this.submit.emit()` an event will be emitted to the parent component. Let's call it in the changeTitle method:

```ts
changeTitle(newTitle: string): void {
  this.submit.emit(newTitle);
}
```

We delegate everything to the parent component - even actually changing the title of the item if needed. \(The method name may seem irrelevant right now. If you'd like you can change it to something more appropriate, such as `submitValue`. Remember to change it in the template as well.\)

We pass `newTitle` when we emit the event. Whatever we pass in `emit()` will be available for the parent as `$event`.

Nothing else is changed in the todo-input component. The events emitted from `keyup.enter` and `click` still call the same method, but the method itself has changed.

Now all we need to do is catch the event in the parent component and attach logic to it. Go to the app-root component and bind to the `submit` event in the `<todo-input>` component:

```html
<todo-input (submit)="addItem($event)"></todo-input>
```

Now all is left is to implement the `addItem` method, which receives a string and adds it to the list:

```ts
addItem(title: string): void {    
  this.todoList.push({ title: title });
}
```

Try it out!


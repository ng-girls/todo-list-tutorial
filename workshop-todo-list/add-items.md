# \#12: 📌Add items

We want to add items to our list. With Angular, we can do this easily and see the item added immediately. We will do this from within the `input-button-unit` component we created earlier. We'll change it so when hitting the Enter key or clicking the submit button, the value of the input box will become the title of the new item, and the new item will be added to the list.

But we don't want the `input-button-unit` component to be responsible for adding a new item to the list. We want it to have minimal responsibility, and **delegate the action to its parent component**. One of the advantages of this approach is that this component will be reusable, and can be attached to a different action in different situations.

For example, in our case, we'll be able to use the `input-button-unit` inside the `todo-item` component. Then we'll have an input box for each item and we'll be able to edit the item's title. In this case, pressing the Enter key or the Save button will have a different effect.

So what we actually want to do is to **emit an event** from the `input-button-unit` component whenever the title is changed. With Angular, we can easily define and emit events from our components!

## @Output\(\)

Add the following line inside the `InputButtonUnitComponent` Class, which defines an output for the component:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
@Output() submit: EventEmitter<string> = new EventEmitter<string>();
```
{% endcode %}

The output property is called `submit`. It's of type `EventEmitter` which has the method `emit`. `EventEmitter` is a Generic Type - we pass to it another type which will be used internally, in this case it's `string`. It's the type of the object that will be emitted by the `emit` method.

Make sure that `Output` and `EventEmitter` are added to the import declaration in the first line of the file:

{% code title="src/app/input-button-unit.component.ts" %}
```typescript
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
```
{% endcode %}

Now, whenever we call `this.submit.emit()`, an event will be emitted to the parent component. Let's call it in the `changeTitle` method:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
changeTitle(newTitle: string): void {
  this.submit.emit(newTitle);
}
```
{% endcode %}

We delegate everything to the parent component - even actually changing the title of the item if needed.

We pass `newTitle` when we emit the event. Whatever we pass in `emit()` will be available for the parent as `$event`. The events emitted from `keyup.enter` and `click` still call the same method, but the method itself has changed.

The method name no longer matches the action it provides. Let's change it to something more appropriate: `submitValue`. You can use the IDE tools to refactor the method name - make sure that it is changed in the template as well.

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
submitValue(newTitle: string) {
  this.submit.emit(newTitle);
}
```
{% endcode %}

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
template: `
  <input #inputElementRef
         [value]="title"
         (keyup.enter)="submitValue($event.target.value)">

  <button (click)="submitValue(inputElementRef.value)">
    Save
  </button>
`,
```
{% endcode %}

### Listening to the event

Now all we need to do is catch the event in the parent component and attach logic to it. Go to the `app-root` component and bind to the `submit` event in the `<app-input-button-unit>` component:

{% code title="src/app/app.component.ts" %}
```markup
<app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
```
{% endcode %}

Now all that's left is to implement the `addItem` method, which receives a string, creates an object with the string as the `title` property, and adds it to the list:

{% code title="src/app/app.component.ts" %}
```typescript
addItem(title: string) {    
  this.todoList.push({ title });
}
```
{% endcode %}

Try it out - enter a new todo item title in the input field and submit it!

**Note:** We're using **ES6 Object Property Value Shorthand** to construct the todo item object. If we use a variable with the same name of the object's property to which we want to assign the variable's value to, we can use this shorthand notation. In our case, `{ title }` is equivalent to `{ title: title }`. If the string was stored in a variable with a different name, we couldn't have used the shorthand. For example:

{% code title="code for example" %}
```typescript
addItem(value: string) {    
  this.todoList.push({ title: value });
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
git push
```
{% endhint %}

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0_12-add-items)
{% endhint %}


# #7: 📤Event binding

We want our application to react to the user's actions. We want to update the title of the todo item whenever the user changes it, or to add a new item when the user presses the Save button or the Enter key.

We still don't have a whole list to show, but at the moment we will use another way to test the action. We will change it to the right functionality later on.

The `input-button-unit` component should look like this:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <input [value]="title">
    <button>Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }
}
```
{% endcode %}

## The Action

First, let's implement `changeTitle`. It will receive the new title as its argument. The best practice is to have our custom methods written after the lifecycle methods (`ngOnInit` in this case):

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
changeTitle(newTitle: string): void {
  this.title = newTitle;
}
```
{% endcode %}

## Binding to Events

Just like binding to element properties, we can bind to events that are emitted by the elements. Again, Angular gives us an easy way to do this. **You just wrap the name of the event with parenthesis, and pass it the method that should be executed when the event is emitted**.

Let's try a simple example, where the title is changed when the user clicks on the button. Notice the parenthesis around `click`. (We also change the binding of the input's value back to `title`.)

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
template: `
  <p>
    input-button-unit works!
    The title is: {{ title }}
  </p>

  <input [value]="title">
  <button (click)="changeTitle('Button Clicked!')">
    Save
  </button>
`,
```
{% endcode %}

> The event is called `click` and not `onClick` - in Angular you remove the `on` prefix from the events in the elements.

Go to the browser and see the result - click on the Save button.

## Event Data

We pass a static string to the method call: `Button Clicked!` But we want to pass the value that the user typed in the input box!

In the next chapter we will learn how to use properties of one element in another element in the same template. Then we'll be able to complete the implementation of the click event of the `Save` button. But now we'll bind a method to an event on the input element: when the user clicks Enter, the method `changeTitle` will be called.

### 'keyup' event

When the user types, keyboard events are emitted. For example `keydown` and `keyup`. We will catch the `keyup` event (when the pressed key is released) and change the title:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
<input [value]="title" (keyup)="changeTitle('Button Clicked!')">
```
{% endcode %}

Now when the user types in the input box, the title is changed to "Button Clicked!". But it's still a static string.

**Tip:** When an element becomes long due to its attributes, you should make it easier on the eye by splitting it into several lines:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
<input [value]="title"
       (keyup)="changeTitle('Button Clicked!')">
```
{% endcode %}

### The $event object

Now we just react when the `keyup` event occurs. Angular allows us to get the event object itself. It is passed to the event binding as `$event` - so we can use it when we call `changeTitle()`.

The event object emitted on `keyup` events has a reference to the element that emitted the event - the input element. The reference is kept in the event's property `target`. As we've seen before, the input element has a property `value` which holds the current string that's in the input box. We can get the current value of the input element using `$event.target.value.`&#x20;

However, if you try doing this directly in the template, like shown below, you will encounter a problem.&#x20;

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
<input [value]="title"
       (keyup)="changeTitle($event.target.value)"><!-- this won't work! -->
```
{% endcode %}

TypeScript can't be sure that `$event.target` is an input element. It could be any kind of element.  And most elements don't have a `value` member.&#x20;

We need to tell TypeScript that we know that the `$event.target` object is of type `HTMLInputElement`, as opposed to `EventTarget`. Casting is done with the keyword `as`. However, it can't be done in the template. If you try casting in the template, as shown below, you will get an error.&#x20;

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```html
<input [value]="title"
       (keyup)="changeTitle(($event.target as HTMLInputElement).value)"><!-- this won't work! -->
```
{% endcode %}

The solution is to perform the casting in a class method. Since we want to keep the method `changeTitle` generic so it can be used also in other places (such as the button), it must receive a string. So we won't use it to receive the event or the target and cast them.

We'll write another method that will only be used for the casting purpose. This is the solution suggested by the Angular tutorial as well: [Event Binding Concepts](https://angular.io/guide/event-binding-concepts).

Add the following method in the component class, before or after the `changeTitle` method.

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
```
{% endcode %}

Now, adjust the method passed to the `(keyup)` event so that it uses both `changeTitle` and `getInputValue` like this:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
<input [value]="title"
       (keyup)="changeTitle(getInputValue($event))">
```
{% endcode %}

Check it out in the browser. Now with every key stroke, you can see the title changes and reflects the input value.

### Pressing the Enter key

You can limit the change to only a special key stroke, in our case it's the Enter key. Angular makes it really easy for us. The `keyup` event has properties which are more specific events. So just add the name of the key you'd like to listen to - in our case it's `keyup.enter`:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
<input [value]="title"
       (keyup.enter)="changeTitle(getInputValue($event))">
```
{% endcode %}

Now the title will change only when the user hits the Enter key while typing in the input.

### Explore the $event

![lab-icon](<../assets/lab (2).jpg>)**Playground:** You can change the `getInputValue` method to log the `$event` object in the console. This way you can explore it and see what properties it has.

Change the method `getInputValue`:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
getInputValue(event): void {
  console.log(event);
  return (event.target as HTMLInputElement).value; // the original functionality still works
}
```
{% endcode %}

Try it out!

**Don't forget to change back the code before we go on!** (Remove `console.log(event);`)

The file should look like this:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <input [value]="title"
           (keyup.enter)="changeTitle(getInputValue($event))">

    <button (click)="changeTitle('Button Clicked!')">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
  
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
```
{% endcode %}

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
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_07-event-binding)
{% endhint %}

# \#7: 📤 Event binding

We want our application to react to the user's actions. We want to update the title of the todo item whenever the user changes it, or to add a new item when the user presses the Save button or the Enter key.

We still don't have a whole list to show, but at the moment we will use another way to test the action. We will change it to the right functionality later on.

## The Action

First, let's implement `changeTitle`. It will receive the new title as its argument. The best practice is to have our custom methods written after the lifecycle methods \(`ngOnInit` in this case\):

{% code title="input.component.ts" %}
```typescript
changeTitle(newTitle: string): void {
  this.title = newTitle;
}
```
{% endcode %}

\(You can also delete the `generateTitle` method, if you created it during the previous chapter.\)

## Binding to Events

Just like binding to element properties, we can bind to events that are emitted by the elements. Again, Angular gives us an easy way to do this. **You just wrap the name of the event with parentheses, and pass it the method that should be executed when the event is emitted**.

Let's try a simple example, where the title is changed when the user clicks on the button. Notice the parentheses around `click`. \(We also change the binding of the input's value back to `title`.\)

{% code title="input.component.ts" %}
```markup
template: `
  <input [value]="title">
  <button (click)="changeTitle('Button Clicked!')">
    Save
  </button>
  <p>The title is: {{ title }}</p>
`,
```
{% endcode %}

> The event is called `click` and not `onClick` - in Angular, you remove the `on` prefix from the events in the elements.

Go to the browser and see the result - click on the Save button.

## Event Data

We pass a static string to the method call: `Button Clicked!` But we want to pass the value that the user typed in the input box!

In the next chapter, we will learn how to use properties of one element in another element in the same template. Then we'll be able to complete the implementation of the `click` event of the Save button. But now we'll bind a method to an event on the `input` element: when the user presses Enter, the `changeTitle` method will be called.

### 'keyup' event

When the user types, keyboard events are emitted, like `keydown` and `keyup`. We will catch the `keyup` event \(when the pressed key is released\) and change the title:

{% code title="input.component.ts" %}
```markup
<input [value]="title" (keyup)="changeTitle('Button Clicked!')">
```
{% endcode %}

Now when the user types in the input box, the title is changed to "Button Clicked!". But it's still a static string.

**Tip:** When an element becomes long due to its attributes, you should make it easier on the eye by splitting it into several lines:

{% code title="input.component.ts" %}
```markup
<input [value]="title"
       (keyup)="changeTitle('Button Clicked!')">
```
{% endcode %}

### The $event object

Now we just react when the `keyup` event occurs. Angular allows us to get the event object itself. It is passed to the event binding as `$event` - so we can use it when we call `changeTitle()`.

The event object emitted on `keyup` events has a reference to the element that emitted the event - the input element. The reference is kept in the event `target` property. As we've seen before, the input element has a `value` property which holds the current string that's in the input box. We can pass `$event.target.value` to the method:

{% code title="input.component.ts" %}
```markup
<input [value]="title"
       (keyup)="changeTitle($event.target.value)">
```
{% endcode %}

Check it out in the browser. Now with every keystroke, you can see the title changes and reflects the input value.

### Pressing the Enter key

You can limit the change to only a special keystroke, in our case it's the Enter key. Angular makes it really easy for us. The `keyup` event has properties which are more specific events. Just add the name of the key you'd like to listen to - `keyup.enter`:

{% code title="input.component.ts" %}
```markup
<input [value]="title"
       (keyup.enter)="changeTitle($event.target.value)">
```
{% endcode %}

Now the title will change only when the user hits the Enter key while typing in the input.

### Explore the $event

![lab-icon](.gitbook/assets/lab%20%284%29%20%281%29.jpg)**Playground:** You can change the changeTitle method to log the `$event` object in the console. This way you can explore it and see what properties it has.

Change the method `changeTitle`:

{% code title="input.component.ts" %}
```typescript
changeTitle(event): void {
  console.log(event);
  this.title = event.target.value; // the original functionality still works
}
```
{% endcode %}

**Playground:** Now change the argument you're passing in the template:

{% code title="input.component.ts" %}
```markup
<input [value]="title"
       (keyup.enter)="changeTitle($event)">
```
{% endcode %}

Try it out!

{% hint style="warning" %}
Don't forget to change the code back before we go on \(!\).
{% endhint %}

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-07_Event_binding)
{% endhint %}


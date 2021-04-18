# \#19: 🔘 Adding a checkbox

We are now able to interact with our todo list by removing items. But what if we want to complete items and still be able to see them in our list, with a line through the todo title? Enter the checkbox!

We will look at:

* Adding a checkbox
* Adding functionality when you click the checkbox so that a CSS class, which adds a ~~strikethrough~~ style, is added to our todo items
* Editing the todo title so that it responds to the checkbox
* Adding a new CSS Class

Let's go ahead and add a checkbox into our ![](.gitbook/assets/component.svg) **item.component.ts** file. Place the following code right before `{{ todoItem.title }}`:

{% code title="src/app/item/item.component.ts" %}
```typescript
  <input type="checkbox"/>
```
{% endcode %}

Now, in order for the checkbox to do anything, we need to add a `click` event handler which we will call `completeItem`. Let's do that now:

{% code title="item.component.ts" %}
```typescript
  <input type="checkbox"
          class="todo-checkbox"
          (click)="completeItem()">
```
{% endcode %}

When we click on the checkbox, it will run the `completeItem` method. Let's talk about what this method needs to accomplish. We want to be able to toggle some CSS styling on the item's title so that when the checkbox is checked it will have a strikethrough. In order to achieve this, we will emit an update event with the new status of the item and catch it in the parent component.

Add the following code to the `ItemComponent` class:

{% code title="src/app/item/item.component.ts" %}
```typescript
isComplete: boolean = false;

completeItem() {
  this.isComplete = !this.isComplete;
}
```
{% endcode %}

But wait! How is any of this going to affect the todo title when we're only touching the checkbox? Well, Angular has this wonderful directive called NgClass. This directive applies or removes a CSS class based on a boolean \(true or false\) expression. There are many ways to use this directive \(see the [NgClass directive documentation](https://angular.io/api/common/NgClass)\) but we will focus on using it like so:

```markup
<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
```

The 'first' and 'second' class will be applied to the element because they are given a true value, whereas the 'third' class will not be applied because it is given a false value. So this is where our earlier code comes into play. Our `completeItem` method will toggle between true and false values, thus dictating whether a class should be applied or removed.

Let's wrap the item title in a `<span>`, then use NgClass to apply the styling. Depending on current item completed field we show line-through decoration or not:

{% code title="item.component.ts" %}
```typescript
<span class="todo-title" [ngClass]="{'todo-complete': isComplete}">
  {{ todoItem.title }}
</span>
```
{% endcode %}

And finally, add the CSS to our ![](.gitbook/assets/css.svg) **item.component.css** file:

{% code title="src/app/item/item.component.css" %}
```css
  .todo-complete {
    text-decoration: line-through;
  }
```
{% endcode %}

Voila! Checking the checkbox should apply a line through the todo title, and unchecking the checkbox should remove the line.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-18_Adding_a_checkbox)
{% endhint %}


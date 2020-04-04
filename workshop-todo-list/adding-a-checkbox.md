# \#19: 🔘 Adding a checkbox

We are now able to interact with our todo list by removing items. But what if we want to complete items and still be able to see them in our list, with a line through the item's title? Enter the checkbox!

We will look at:

* Adding a checkbox
* Adding functionality when you click the checkbox so that a CSS class, which adds a ~~strikethrough~~ style, is added to our todo items
* Editing the todo title so that it responds to the checkbox
* Adding a new CSS Class

Let's go ahead and add a checkbox into our `todo-item.component.ts` file. Place the following code right before `{{ item.title }}`:

{% code title="src/app/todo-item/todo-item.component.ts" %}
```markup
<input type="checkbox"/>
```
{% endcode %}

Now, in order for the checkbox to do anything, we need to add a `click` event handler which we will call `completeItem`. We'll also add a css-class and wrap the element and the interpolation together for styling. Let's do that now:

{% code title="src/app/todo-item/todo-item.component.ts" %}
```markup
<div>
  <input type="checkbox"
         class="todo-checkbox"
         [checked]="item.completed"
         (click)="completeItem()"/>
  {{ item.title }}
</div>
```
{% endcode %}

When we click on the checkbox, it will run the `completeItem` method. Let's talk about what this method needs to accomplish. We want to be able to toggle some CSS styling on the item's title so that when the checkbox is checked it will have a strikethrough. We also want to save the status of the item in the local storage. In order to achieve this, we will emit an update event with the new status of the item and catch it in the parent component.

{% code title="src/app/todo-item/todo-item.component.ts" %}
```javascript
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  // put this method below ngOnInit
  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }
```
{% endcode %}

But wait! How is any of this going to affect the todo title when we're only touching the checkbox? Well, Angular has this wonderful directive called NgClass. This directive applies or removes a CSS class based on a boolean \(true or false\) expression. There are many ways to use this directive \(see the [NgClass directive documentation](https://angular.io/api/common/NgClass)\) but we will focus on using it like so:

```markup
<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
```

The 'first' and 'second' class will be applied to the element because they are given a true value, whereas the 'third' class will not be applied because it is given a false value. So this is where our earlier code comes into play. Our `completeItem` method will toggle between true and false values, thus dictating whether a class should be applied or removed.

Let's wrap the item title in a `<span>`, then use NgClass to apply the styling. Depending on current item completed field we show line-through decoration or not:

```markup
<span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
  {{ item.title }}
</span>
```

And finally, add the CSS to our `todo-item.component.css` file:

```css
  .todo-complete {
    text-decoration: line-through;
  }
```

Next step is to tell the parent element list-manager what to do, when update event is emitted. In order to do so we have to bind update action and update method that will trigger a proper function in TodoListService. So we apply here:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```markup
<app-todo-item [item]="todoItem"
               (remove)="removeItem($event)"></app-todo-item>
</li>
```
{% endcode %}

Next modifications:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```markup
<app-todo-item [item]="todoItem"
             (remove)="removeItem($event)"
             (update)="updateItem($event.item, $event.changes)"></app-todo-item>
</li>
```
{% endcode %}

And create additional method to handle this update item event. Very similar to `removeItem` function:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```markup
updateItem(item, changes) {
  this.todoListService.updateItem(item, changes);
}
```
{% endcode %}

Voila! Checking the checkbox should apply a line through the todo title, and unchecking the checkbox should remove the line.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/19-adding-a-checkbox)
{% endhint %}


# \#10: ➕ New component: todo-item

We will create a new component to display each todo item presented in the list. It will be a simple component at first, but it will grow later on. What's important is that **it will get the todo item as an input from its parent component**. This way it can be a reusable component, and not rely directly on the application's data and state.

Create a new component called `item`. You can see a new folder 📁 **src/app/item** was created with the component files inside.

Use the new component in the template of `AppComponent`, inside the `<li>` element:

{% code title="src/app/app.component.ts" %}
```typescript
<ul>
  <li *ngFor="let item of todoList">
    <todo-item></todo-item>
  </li>
</ul>
```
{% endcode %}

Check out the result in the browser. What do you see? Why?

## @Input\(\)

We want to display the title of each item within the `todo-item` component. We need to pass the title of the current item \(or the whole item\) in the loop to the `todo-item` component.

Again, Angular makes it really easy for us, by providing the `Input` decorator.

Inside the newly generated `ItemComponent` class add the line:

{% code title="src/app/item/item.component.ts" %}
```typescript
@Input() todoItem: any;
```
{% endcode %}

It tells the component to expect an input of type string and to assign it to the class member called `todoItem`. Make sure that `Input` is added to the import statement in the first line in the file. Now we can use it inside the `ItemComponent` template and extract the item's title with interpolation: \`

The component should look like this now:

{% code title="src/app/item/item.component.ts" %}
```typescript
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    {{ todoItem.title }}
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;

  constructor() { }

  ngOnInit() {
  }

}
```
{% endcode %}

Now we need to pass an todoItem where we use the component. Go back to ![](.gitbook/assets/component.svg) **src/app/app.component.ts** and pass the item title to the `todo-item`:

{% code title="src/app/app.component.ts" %}
```markup
<ul>
  <li *ngFor="let item of todoList">
    <todo-item [todoItem]="item"></todo-item>
  </li>
</ul>
```
{% endcode %}

The `todoItem` here in square brackets is the same as declared as the component's `@Input`.

We used property binding on an element we created ourselves! And now we can actually see and understand that property binding binds to an actual property of the component. Soon we'll see how this list can be dynamic.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-10_New_component_todo-item)
{% endhint %}


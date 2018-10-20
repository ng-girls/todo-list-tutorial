# Interface

We want to use TypeScript's abilities to know what kind of object we pass as an `item` to the `todo-item` component. We'll make sure that the item is of the right type. But its type is not a simple string, number or boolean. We'll define the item's type using can **interface**.

> We've already seen an interface provided by Angular: the `OnInit` interface which includes the method `ngOnInit`. Every Class that implements this interface should define this method. Otherwise we'll get an error during compile time.
>
> Interfaces exist only in TypeScript and are removed when the code is compiled to JavaScript. In JavaScript we cannot enforce type safety out of the box.

Create a `TodoItem` interface in a new `interfaces` folder with the Angular CLI:

```bash
ng g i interfaces/todo-item
```

`i` is short for... you guessed it - interface. Adding a path causes the Angular CLI to generate the folders you stated if they do not already exist.

Open the newly created file `src/app/interfaces/todo-item.ts`:

{% code-tabs %}
{% code-tabs-item title="src/app/interfaces/todo-item.ts" %}
```typescript
export interface TodoItem {
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Now we can define what properties and/or methods every object of type TodoItem should have. At this point we'll add two members:

* `title` which must be of type `string`
* `completed` which is of type `boolean` and is an optional member

{% code-tabs %}
{% code-tabs-item title="src/app/interfaces/todo-item.ts" %}
```typescript
export interface TodoItem {
  title: string;
  completed?: boolean;
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Let's define the item @Input to be of the type we've created. This will allow the IDE to suggest us available members when we use item in the component class and template.

{% code-tabs %}
{% code-tabs-item title="src/app/todo-item/todo-item.component.ts" %}
```typescript
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
```
{% endcode-tabs-item %}
{% endcode-tabs %}

You need to import the interface to this file.

{% code-tabs %}
{% code-tabs-item title="src/app/todo-item/todo-item.component.ts" %}
```typescript
import { TodoItem } from '../interfaces/todo-item';
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Now, let's define the list of todo items to contain objects of the `TodoItem` type.

{% code-tabs %}
{% code-tabs-item title="src/app/app.component.ts" %}
```typescript
export class AppComponent {
  title = 'app';
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Again, you need to import the interface to this file.

{% code-tabs %}
{% code-tabs-item title="src/app/app.component.ts" %}
```typescript
import { TodoItem } from './interfaces/todo-item';
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Now try to delete the title of one of the objects in the list. What happens?


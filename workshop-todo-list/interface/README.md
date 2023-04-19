# #11: ⛓ Interface

We want to use TypeScript's abilities to know what kind of object we pass as an `item` to the `todo-item` component. We'll make sure that the item is of the right type. But its type is not a simple string, number or boolean. We'll define the item's type using an **interface**.

> We've already seen an interface provided by Angular: the `OnInit` interface which includes the method `ngOnInit`. Every Class that implements this interface should define this method. Otherwise we'll get an error during compile time.
>
> Interfaces exist only in TypeScript and are removed when the code is compiled to JavaScript. In JavaScript we cannot enforce type safety out of the box.

Create a `TodoItem` interface in a new `interfaces` folder with the Angular CLI:

```bash
ng g i interfaces/todo-item
```

`i` is short for... you guessed it - interface. Adding a path in the command to the Angular CLI generates the folders you specified if they do not already exist.

{% hint style="info" %}
**StackBlitz Instructions** ![](<../../.gitbook/assets/stackblitz-hint (1) (2).svg>)

We'll use the Angular Generator to create the interface. Follow the instructions on the [StackBlitz instructions](stackblitz.md) page and return here to continue the worksheet.
{% endhint %}

In your IDE, open the newly created file `src/app/interfaces/todo-item.ts`:

{% code title="src/app/interfaces/todo-item.ts" %}
```typescript
export interface TodoItem {
}
```
{% endcode %}

Now we can define what properties and/or methods every object of type TodoItem should have. At this point we'll add two members:

* `title` which must be of type `string`
* `completed` which is of type `boolean` and is an optional member&#x20;

{% code title="src/app/interfaces/todo-item.ts" %}
```typescript
export interface TodoItem {
  title: string;
  completed?: boolean;
}
```
{% endcode %}

Let's define the item `@Input` to be of the type we've created. This will allow the IDE to suggest us available members when we use item in the component class and template.

{% code title="src/app/todo-item/todo-item.component.ts" %}
```typescript
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
```
{% endcode %}

You need to import the interface to this file.

{% code title="src/app/todo-item/todo-item.component.ts" %}
```typescript
import { TodoItem } from '../interfaces/todo-item';
```
{% endcode %}

Now, let's define the list of todo items to contain objects of the `TodoItem` type.

{% code title="src/app/app.component.ts" %}
```typescript
export class AppComponent {
  title = 'todo-list';
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
{% endcode %}

Again, you need to import the interface to this file.

{% code title="src/app/app.component.ts" %}
```typescript
import { TodoItem } from './interfaces/todo-item';
```
{% endcode %}

Now try to delete the title of one of the objects in the list. What happens?

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
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_11-interface)
{% endhint %}

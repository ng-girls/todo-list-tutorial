# \#9: 📋 The To Do list

Now you are going to add the todo-list itself to the component `todo-root`. Open the file ![](.gitbook/assets/component.svg) **src/app/app.component.ts**. Add the list of items inside the `AppComponent` class as an array of objects for each item. At this stage, each item only contains a title:

{% code title="src/app/app.component.ts" %}
```typescript
todoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];
```
{% endcode %}

> Putting info \(resources\) right inside your code is called hardcoding and is considered an especially bad practice. Eventually we'll get the list from an external source, but even if not, it's best to place mock data in their own files. But let's advance step-by-step, so defining items this way is okay for now.

Now you have to tell the browser to display those items. For this, you will use the **Angular built-in directive,** `*ngFor`. It works like an enhanced loop in Java. The `*` notation causes Angular to use the current element as a template when rendering the list.

Insert the loop right after `<todo-input></todo-input>` like this:

{% code title="src/app/app.component.ts" %}
```markup
<todo-input></todo-input>
<ul>
  <li *ngFor="let item of todoList">
    {{ item.title }}
  </li>
</ul>
```
{% endcode %}

This means "go over all items of the todoList array, and print a list which contains the items' titles". While looping over the `todoList`, each item is assigned to the variable `item`, and we can use this variable inside the element in which we define it \(in this case the `li` element\) and its children.

## Angular directives

Directives are pieces of logic \(written as classes\) that can be attached to elements and components. They are used to change the display or the behavior of the element. Angular comes with some built-in directives.

As we saw, the `ngFor` directive modifies the template at runtime by repeating the element it's called on and its content. Another directive, for example, is `ngIf`, which receives a Boolean expression. Angular will only render the element and its content if the expression is true. It also needs the `*` prefix because it uses the target element as a template, similar to the `*ngFor` directive. For example:

{% code title="code for example" %}
```markup
<h1 *ngIf="userLoggedIn">Welcome!</h1>
```
{% endcode %}

In this example, `userLoggedIn` should be a member of the component, and have a true or false value. If it's true, the `h1` element will be displayed. If false, the element will not exist in the DOM.

There are other directives in Angular which are not structural \(and are used without the `*`\). For example `ngStyle` and `ngClass`, with which you can dynamically apply style and classes to the element.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-09_The_list)
{% endhint %}


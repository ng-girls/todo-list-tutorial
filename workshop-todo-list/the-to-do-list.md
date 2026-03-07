# #9: 📋 The To Do list

Now you are going to add the to do list itself to the component `app-root`. Open the file `src/app/app.component.ts`. Add the list of items inside the `AppComponent` class as an array of objects for each item. At this stage, each item only contains a title:

{% code title="src/app/app.component.ts" %}
```typescript
export class AppComponent {
  title = 'todo-list';
  todoList = [
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

> Putting info (resources) right inside your code is called hardcoding and is considered an especially bad practice. Eventually we'll get the list from an external source, but even if not, it's best to place mock data in their own files. But let's advance step-by-step, so defining items this way is okay for now.

## @for loop

Now you have to tell the browser to display those items. For this, you will use the **Angular built-in control flow block,** `@for`. It works like a loop in any programming language, iterating over an array and rendering the given template, with the current item's data.&#x20;

To display a list in HTML we can use an ordered list with `<ol>` or an unordered list with `<ul>`. Within this element, every item will be inserted within a `<li>` element. The `@for` loop notation will surrpond the list item. Insert the `<ul>` and the loop right after `<app-input-button-unit></app-input-button-unit>` like this:

{% code title="src/app/app.component.ts" %}
```markup
template: `
  <h1>
    Welcome to {{ title }}!
  </h1>

  <app-input-button-unit></app-input-button-unit>

  <ul>
    @for(let todoItem of todoList; track todoItem.title) {
      <li>
        {{ todoItem.title }}
      </li>
    }
  </ul>
`,
```
{% endcode %}

This means "go over all items of todoList array defined in the class, and print out a list which contains the items' titles". While looping over the `todoList`, each item is assigned to the template variable `todoItem`, and we can use this variable inside the element in which we define it (in this case the `li` element) and its children.&#x20;

The `track` notation tells Angular by which property of the item it should track changes in the list. This should be a unique value for each item (usually an ID). When the list changes (items are added, removed, moved or changed), Angular will check the items by this property and re-render only those which have a different value that before.&#x20;

In our case at the moment, we assume that the title is unique for each item. A better way to manage the items is to add an `id` property to each, assigning a unique value to each `todoItem.id` and assigning a new `id` value if the `title` changes (otherwise the change of `title` will not be revealed on the screen).

## @if statement

Another control flow block in Angular is `@if`. It receives a Boolean expression. Angular will only render the template within the block if the expression is true. Optional `@else if` and `else` blocks extend the flow.

{% code title="code for example" %}
```markup
@if(userLoggedIn) {
    <h1>Welcome!</h1>
    <h2>You are logged in</h2>
} @else {
    <h3>Please log in</h3>
}
```
{% endcode %}

In this example, `userLoggedIn` should be a member of the component, and have a true or false value. If it's true, the `h1` and  `h2` elements will be displayed. If false, the elements will not exist in the DOM. (They're not hidden using style - they do not exist at all.) Instead, the `h3` element will be displayed.&#x20;

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
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_09-the-to-do-list)
{% endhint %}

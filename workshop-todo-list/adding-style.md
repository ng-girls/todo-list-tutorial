# \#14: 💅 Adding Style

With Angular, we can give style to components in a way that will not affect the rest of the application. It's a good practice to encapsulate the component-related style this way.

We can also state general style rules to be used across the application. This is good for creating the same look-and-feel for all our components. For example, we can decide what color palette will be used as the theme of our app. Then, if we'd like to change the colors or offer different themes, we can change it in just one place, instead of in each component.

Angular gives us different style encapsulation methods, but we'll stick to the default.

The Angular CLI has generated a general stylesheet for us at `src/style.css`. Paste the following code into this file:

{% code title="src/style.css" %}
```css
html, body, div, span,
h1, p, ul, li {
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

body {
  background: #f1f1f1;
  font-size: 16px;
  line-height: 22px;
  color: #404040;
  font-family: 'Lucida Grande', Verdana, sans-serif;
}

ol, ul {
  list-style: none;
}

.btn {
  background: lightseagreen;
  color: #fff;
  padding: 3px 10px;
  margin: 0 0 0 3px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
  vertical-align: bottom;
}

.btn:hover {
  background: lightslategrey;
}

.btn-red {
  background: red;
}

.btn-red:hover {
  background: darkred;
}

.app-title {
  font-size: 52px;
  line-height: 52px;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
  letter-spacing: -0.8px;
}
```
{% endcode %}

> How does the project know to look at this file? In the Angular CLI configuration file `angular.json` under `projects.todo-list.architect.build.options.styles`, you can state the files for the build tool to take and add to the project. You can open the browser's dev tools and see the style inside the element:
>
> ```markup
> <html>
>  ...
>  <head>
>    ...
>    <style type="text/css">
>    ...Your style is here
>    </style>
>    ...
>  </head>
>  ...
> </html>
> ```

We added style directly to elements \(`html, body, div, span, h1, p, ul, li`\) which will affect our app immediately. We also added styles using css-class selectors. We need to add these class names to the relevant elements.

In `app-root` add the class `app-title` to the `h1` element:

{% code title="src/app/app.component.ts" %}
```markup
template: `
  <h1 class="app-title">
    Welcome to {{ title }}!
  </h1>

  <app-list-manager></app-list-manager>
`,
```
{% endcode %}

In `input-button-unit` add the `btn` class to the `button` element:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
<button class="btn"
        (click)="submitValue(inputElementRef.value)">
  Save
</button>
```
{% endcode %}

Now we'll add some component-specific styles.

Add the following style to `input-button-unit.component.css`:

{% code title="src/app/input-button-unit/input-button-unit.component.css" %}
```css
.todo-input {
  padding: 4px 10px 4px;
  font-size: 16px;
  font-family: 'Lucida Grande', Verdana, sans-serif;
  line-height: 20px;
  border: solid 1px #dddddd;
  border-radius: 5px;
  flex-grow: 1;
}

:host(:not([hidden])) {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
```
{% endcode %}

How does this stylesheet get attached to the `input-button-unit` component? Look at the file `input-button-unit.component.ts`. One of the properties in the object passed to the `@Component` decorator is `styleUrls`. It's a list of stylesheets to be used by Angular, which encapsulates the style within the component.

The selector :host is applied to the element that holds this component - `<app-input-button-unit>`. This element is not a part of this component's template. It appears in its parent's template. This is how we can control its style from within the component.

We need to add the `todo-input` class to the `input` element:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
<input class="todo-input"
       #inputElementRef
       [value]="title"
       (keyup.enter)="submitValue($event.target.value)">
```
{% endcode %}

Now let's add style specifically to the `list-manager` component. Open the file `list-manager.component.css` and paste the following style inside:

{% code title="src/app/list-manager/list-manager.component.css" %}
```css
.todo-app {
  position: relative;
  width: 400px;
  padding: 30px 30px 15px;
  background: white;
  border: 1px solid;
  border-color: #dfdcdc #d9d6d6 #ccc;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
}

.todo-app::before, .todo-app::after {
  content: '';
  position: absolute;
  z-index: -1;
  height: 4px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.todo-app::after {
  bottom: -3px;
  left: 0;
  right: 0;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.todo-app::before {
  bottom: -5px;
  left: 2px;
  right: 2px;
  border-color: #c4c4c4;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}
```
{% endcode %}

We'll wrap the content of this component with a `<div>` element with the `todo-app` class.

{% code title="src/app/list-manager/list-manager.component.ts" %}
```markup
template: `
  <div class="todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  </div>
`,
```
{% endcode %}

Finally, add the following style to `todo-item.component.css`:

{% code title="src/app/todo-item/todo-item.component.css" %}
```css
.todo-item {
  padding: 10px 0;
  border-top: solid 1px #ddd;
  min-height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}

.todo-checkbox {
  flex-shrink: 0;
  margin: auto 1ex auto 0;
}

.todo-title {
  flex-grow: 1;
  padding-left: 11px;
}
```
{% endcode %}

Wrap the content of the `todo-item` component with a `div` element with the `todo-item` class:

```markup
<div class="todo-item">
  {{ item.title }}
</div>
```

We'll use the `todo-checkbox` and `todo-title` classes later on.

You can change the style as you wish - the size of elements, the colors - however you'd like!

Note: You can use [SCSS](https://www.freecodecamp.org/news/the-complete-guide-to-scss-sass-30053c266b23/) files in the project, which is a nicer way to write style. It has great features that help the developer. SCSS files are compiled to CSS when the project is built.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/14-adding-style)
{% endhint %}


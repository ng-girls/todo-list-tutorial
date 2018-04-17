# Component

One approach in Web development \(and software development generally\) is component-based architecture. In the past years it has gained a lot of popularity. What is a component?

In [Service-Oriented Architecture \(SOA\) vs. Component Based Architecture](http://petritsch.co.at/download/SOA_vs_component_based.pdf), Helmut Petritsch defines a component as follows:

> A component is a software object, meant to interact with other components, encapsulating certain functionality or a set of functionalities. A component has a clearly defined interface and conforms to a prescribed behaviour common to all components within an architecture.

In Web applications, **a component controls a patch of screen called a view**. It's a part of what you will eventually see on the screen. It has a template, which defines its visual structure. It also has logic which defines the behavior and the dynamic values. The logic part is JavaScript code and is called the controller.

Here's a diagram of a component in Angular, with the result below.
![Angular Component](assets/Angular_Component.001.jpeg)

Directives, pipes, and services are other building blocks in Angular, which we will discuss later in the tutorial.

Let's take a look at the component that was created by the Angular CLI. All the relevant files exist in the folder `src/app`. Open the file `app.component.ts`.

Just like ngModules that we saw in the previous chapter, a component is also defined by a class with a decorator. This is the class definition:

```ts
export class AppComponent {
  name = 'todo';
}
```

It has one member called "name". It is a property to which you can assign a value. The value assigned to it here is the string "todo".

Angular takes care of synchronizing the members of the component with the component template. So we can easily use the member `name` in the template. Take a look at the template attached to the component in the file `app.component.html`. Near the top, you'll see code like this:

```html
<h1>
  Welcome to {{ name }}!
</h1>
```

The double curly braces and their content are called **Interpolation**. This is one form of **data binding** in Angular. As we mentioned before, the code in this file is not used as-is when the browser renders the component. Angular compiles it to JavaScript code. In one of the compilation steps, it looks for Interpolations inside the template. The content of the Interpolation is an "Angular template expression" (which is a lot like JavaScript). The expression is evaluated at runtime, and then you see the result.

Interpolation is one of the strongest, most basic features in Angular. It has existed from the very beginning of Angular - in the first version. It makes it really simple to insert dynamic data into the view.

In this component, the expression is simply the member of the component class, `name`. **Let's try to change it.** Try out the following and see the result in the browser. \(With every change you make in the file, the browser will refresh automatically!\)

* Remove the curly braces and keep just the content `name`.
* Put the curly braces back and replace the content with some mathematical expression, for example: `{{ 2 + 2 }}`. \(The spaces are not mandatory, they just make the code more readable.\)
* Write a mathematical expression combined with the `name` member: `{{ name + 10 }}`
* Pass an undefined variable to the expression - a variable which was not declared in the component class. For example: `{{ x }}`
* Try out anything you'd like. Don't worry - you can't do any harm to the browser or the computer! In the worst case, the browser will run out of memory and will get stuck. \(But you'll have to write something really complicated to make that happen!\)

This is one way that you can bind members of the component's controller to its template. How does Angular know that this is the template of the App component?

Let's go back to the file `app.component.ts` and look at the component's metadata defined in the decorator `@Component` right above the class definition:

```ts
@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

We pass an object of definitions to the decorator, just like we saw in the previous chapter with ngModule. The second property, `templateUrl`, tells Angular where to look for the template attached to the component. There is another option to point to the template, which we'll discuss later: to write the whole template inline here, in the component definition.

The third property, `styleUrls`, tells Angular where to look for the CSS files that define the style of this component. It can have multiple CSS files. That's why the value of `styleUrls` is an array. You can take a look at the CSS file `app.component.css` - you'll see that it's empty. You can add some CSS style here, for example:

```css
h1 {
  color: red;
}
```

We'll add more style later on.

The first property, `selector`, tells Angular what will be the name of the tag that we'll use to call the component. As we saw in the file `src/index.html`, we use the app component inside the body:

```html
<body>
  <todo-root></todo-root>
</body>
```

The element `todo-root` is not an HTML element. It is the component that was created with the selector `todo-root`. Try changing the selector. You'll see that if you change it in only one of the files, nothing will be displayed, since the element is no longer replaced with an Angular component. You can see an error message in the browser's console.

One last thing: the first line in the component file imports the code that defines the decorator `@Component`. It is needed to use the decorator, which is defined in the imported file \(or actually, in one of its own imports\). Try removing this line, and see the error.

## Inline Template

Let's move the template to be **inline** in the component definition. This will help us manage the template while looking at its functionality.
In the file `app.component.ts` replace the line

```ts
templateUrl: './app.component.html',
```

with

```ts
template: ``,
```

Notice the **backticks** - they are used to define Template Literals, which are new in JavaScript \(ES6\). This way you can define multi-line strings. They have another cool ability: to easily use JavaScript variables and expressions within the string \(with no relation to Angular binding expressions in the template\). Read about it in the [MDN documentation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals).

Make sure you replace `templateUrl` with `template`, and don't forget the comma at the end of the line.

Now copy the entire template from `app.component.html` and paste it between the backticks.  We'll reformat the code a bit to have it easier on the eye:

```ts
template: `
  <!--The content below is only a placeholder and can be replaced.-->
  <div style="text-align:center">
    <h1>
      Welcome to {{ name }}!
    </h1>
    <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
  </div>
  <h2>Here are some links to help you start: </h2>
  <ul>
    <li>
      <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
    </li>
    <li>
      <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
    </li>
    <li>
      <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
    </li>
  </ul>
`,
```

It is easier to manage the template when you see its controller at the same time. This is true as long as the template doesn't get too big and the controller doesn't get too complicated. If they do, it's a sign you should refactor your code by breaking it down to child components.

In fact, there's a lot of stuff we don't need in this template, so let's get rid of most of it:

```ts
template: `
  <h1>
    Welcome to {{ name }}!
  </h1>
`,
```

At this point you can delete the file `app.component.html`.

The same way we use inline templates, we can use also inline styles. But for now we will keep the styles in a separate file.

## Summary

We have explored the root component that was generated for us by the Angular CLI, and even refactored it. In the next chapter, we will create a new component. We will start building the tree of components, which defines the structure of the application.

[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-03_Component)


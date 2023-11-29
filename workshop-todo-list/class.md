# #5: 💼 Class

A class is a special programmatic structure. It is defined with **members** which can be **properties** (variables) and **methods** (functions). Then instances of the class are created, usually by calling the `new` operator on the class: `let myInstance = new myClass();`. The instance created is an object on which you can call the class methods and get and set the values of its properties. Multiple instances can be created from one class.

## In Angular...

Angular takes care of creating instances of the classes you define - if they are recognized as Angular building blocks. The decorators make that connection with Angular.

Each time you use a component in a template, a new instance of it is created. For example, here three instances of the InputButtonUnitComponent class will be created:

{% code title="src/app/app.component.ts" %}
```markup
// example only

template: `
  <app-input-button-unit></app-input-button-unit>
  <app-input-button-unit></app-input-button-unit>
  <app-input-button-unit></app-input-button-unit>
`,
```
{% endcode %}

The class `InputButtonUnitComponent` is empty. Before adding members (properties and methods) we'll present the constructor, which is not written in the component class by default.&#x20;

## constructor

The construcor is a method that is called by JavaScript when an instance of the class is created. Whatever is inside this method is used to create the instance. It can receive parameters and run some logic to define the values of the properties of the created instance.

> A strong feature in Angular that uses the constructor is dependency injection. We'll get to that later on, when we start using services.

A class may have methods with various names, but the `constructor` is the reserved word for this special method. To use the constructor of a class, simply implement it:

```typescript
class MyClass {
// members can be defined and initiated here

  constructor(/* parameters can be defined here */) {
    // initialization code here
  }
}

```

Several constructors can be written with different sets of arguments (parameters). When creating an instance of a class, the required parameters should be passed.&#x20;

For example, the `Date` class has several constructors. To create a `Date` object you can call it without parameters to create an object of the current date and time:&#x20;

```typescript
const now = new Date();
```

or with a parameter, for instance a string representing a date to create an object with this value:

```typescript
const ninetyFive = new Date('1995-12-17T03:24:00');
```

## Properties

The property `title` we added is used to store a value, in our case of type string. Each instance of the class will have its own `title` property, meaning you can change the value of `title` in one instance, but it will remain the same in the other instances.

In TypeScript, we must declare members of the class either in the class body outside any method, or pass them to the constructor - as we will see when we use services.

You can declare a property without initializing it:

```typescript
title: string;
```

Then you can assign a value at a later stage, for example in the constructor.  Here we explicitly noted that `title` is of the type `string`. (The type is inferred by TypeScript when we immediately assign a value, so there's no need to add the type in this case.)

When referencing a member of the class from within a class method you must prefix it with `this`. It's a special property that points at the current instance.

Try setting a different value for `title` from inside the constructor. See the result in the browser:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
title = 'Hello World';

constructor() { 
  this.title = 'I Love Angular';
}
```
{% endcode %}

### Methods

Let's add a method that changes the value of `title` according to the argument we will pass. We'll call it `changeTitle`. The method will have one parameter of type `string`. Add it **inside the class body** (but not inside another method):

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
changeTitle(newTitle: string) {
  this.title = newTitle;
}
```
{% endcode %}

**Note:** Functions and Methods can return a value that can be used when the method is called. For example:

{% code title="code for example" %}
```typescript
function multiply (x: number, y: number) {
  return x * y;
}

let z = multiply(4, 5);
console.log(z);
```
{% endcode %}

The method `changeTitle` is not used anywhere yet. We can call it from another method or from the template (which we will see in the following chapters). Let's call it from the constructor.

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
constructor() { 
  this.changeTitle('My First Angular App');
}
```
{% endcode %}

## Debugging Tip

You can always use `console.log(someValue)` inside class methods. Then the value you passed as an argument will be printed in the browser's console. This way you can see the order of the execution of the methods and the value of the argument you pass (if it's a variable). For example:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
constructor() { 
  console.log('in constructor');
  this.changeTitle('My First Angular App');
  console.log(this.title);
}

changeTitle(newTitle: string) {
  console.log(newTitle);
  this.title = newTitle;
}
```
{% endcode %}

The browser's console is a part of its Dev Tools. You can see how to open the console in different browsers here: [https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers](https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers)

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
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_05-class)
{% endhint %}

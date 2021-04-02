# \#8: 📎 Element ref - \#

In the last chapter, we ended with our input component able to display and change the title of our todo item. `input-button-unit.component.ts` should look like this:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <input [value]="title"
           (keyup.enter)="changeTitle($event.target.value)">

    <button (click)="changeTitle('Button Clicked!')">
      Save
    </button>
  `,  
  styleUrls: ['./input-button-unit.component.css']  
})    
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }                     

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
```
{% endcode %}

First let's remove a bit of the template that we don't need. Remove these lines:

{% code title="remove this from src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
<p>
  input-button-unit works!
  The title is: {{ title }}
</p>
```
{% endcode %}

Now we want to take the value of the input \(that the user typed\) and change the title when we press the `Save` button.

We already know how to create a button and react to clicking on it. We now need to pass some data from a different element to the method. We want to use the `input` element's value from inside the `button` element.

Angular helps us do exactly that. **We can store a reference to the element we want in a variable with the name we choose,** for example `inputElementRef`, **using a simple syntax - a hash.** Add `#inputElementRef` to the `input` element, and use it in the `click` event of the button:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
template: `
  <input #inputElementRef
         [value]="title"
         (keyup.enter)="changeTitle($event.target.value)">

  <button (click)="changeTitle(inputElementRef.value)">
    Save
  </button>
`,
```
{% endcode %}

Now we can use the value that the user entered in the `input` element directly in the method call to handle clicking the `Save` button!

## What is that `#` we see?

Angular lets us define a new local variable named `inputElementRef` \(or any name you choose\) that holds a reference to the element we defined it on, and then use it any way we want. In our case, we use it to access the `value` property of the `input`.

Instead of hunting down the elements via a DOM query \(which is bad practice, as we discussed\), we now can put element references in the template and access each element we want declaratively.

Next, we'll build the list of todo items.

{% hint style="info" %}
💾 **Save your code to GitHub**

StackBlitz users - press **Save** in the toolbar and continue to the next section of the tutorial.

Commit all your changes by running this command in your project directory.
```text
git add -A && git commit -m "Your Message"
```

Push your changes to GitHub by running this command in your project directory.
```text
git push
```
{% endhint %}

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0_08-element-ref)
{% endhint %}


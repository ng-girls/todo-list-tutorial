# \#8: 📎 Element ref - \#

In the last chapter, we ended with our input component able to display and change the title of our todo item. ![](.gitbook/assets/component.svg) **input.component.ts** should look like this:

{% code title="input.component.ts" %}
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input [value]="title"
           (keyup.enter)="changeTitle($event.target.value)">
    <button (click)="changeTitle('Button Clicked!')">
      Save
    </button>
    <p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = '';

  constructor() { }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
```
{% endcode %}

Now we want to take the value of the input \(that the user typed\) and change the title when we press the Save button.

We already know how to create a button and react to clicking on it. We now need to pass to the method some data from a different element. We want to use the `input` element's value from inside the `button` element.

Angular helps us do exactly that. **We can store a reference to the element we want in a variable with the name we choose,** for example `inputElement`, **using a simple syntax - a hash.** Add `#inputElement` to the `input` element, and use it in the `click` event of the button:

{% code title="input.component.ts" %}
```markup
<input [value]="title"
       (keyup.enter)="changeTitle($event.target.value)"
       #inputElement>

<button (click)="changeTitle(inputElement.value)">
  Save
</button>
```
{% endcode %}

Now we can use the value that the user entered in the `input` element in the method called when clicking the Save button!

What is that `#` we see?

Angular lets us define a new local variable named `inputElement` \(or any name you choose\) that holds a reference to the element we defined it on, and then use it any way we want. In our case, we use it to access the `value` property of the `input`.

Instead of hunting down the elements via a DOM query \(which is bad practice, as we discussed\), we now can put element references in the template and access each element we want declaratively.

Next, we'll build the list of todo items.

## 🧪 Tip - explore the element reference

Just like we did in the previous chapter, when we logged `$event`, you can do the same with `#inputElement`.

**Playground:** Change the method `changeTitle` so it will receive the whole element reference and log it to the console:

{% code title="input.component.ts" %}
```markup
<input [value]="title"
       (keyup.enter)="changeTitle(inputElement)"
       #inputElement>

<button (click)="changeTitle(inputElement)">
  Save
</button>
```
{% endcode %}

{% code title="input.component.ts" %}
```typescript
changeTitle(inputElementReference): void {
  console.log(inputElementReference);
  this.title = inputElementReference.value;
}
```
{% endcode %}

Don't forget to put the code back the way it was after you're finished experimenting! It's best to pass to a method exactly the value it needs, instead of the whole object.

## Resources

[Angular Template Reference Variables](https://angular.io/guide/template-syntax#template-reference-variables--var-)

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-08_Element_ref)
{% endhint %}


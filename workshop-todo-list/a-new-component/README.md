# \#4: ✏ A new component

In this chapter we will write a whole new component. It will allow us to add an item to the todo list. It will be composed of the HTML elements `input` and `button`. We will call it Input-Button-Unit.

We'll use the Angular CLI to generate all the needed files and boilerplate for us. The Angular CLI takes commands in a terminal window. This doesn't mean that we have to stop the process `ng serve`. Instead, we can open another terminal window or tab and run the additional commands from there. The changes will be reflected immediately in the browser.

Open another terminal tab and run:

```text
ng g c input-button-unit
```

{% hint style="info" %}
**StackBlitz Instructions** ![](../../.gitbook/assets/stackblitz-hint.svg)

We'll use the Angular Generator to create a component. Follow the instructions on the [StackBlitz instructions](stackblitz.md) page and return here to continue the worksheet.
{% endhint %}

As we've seen before, `ng` is the command for using the Angular CLI. `g` is a shorthand for `generate`. `c` is a shorthand for `component`. `input-button-unit` is the name we give to the component.

So the long version of the command is \(don't run it\):

```text
ng generate component input-button-unit
```

Let's take a look of what the Angular CLI created for us.

It created a new folder called `src/app/input-button-unit`. There are three files there \(or four if you're not using inline-template\):

* `input-button-unit.component.scss` - this is where the style that's specific to the component will be placed.
* `input-button-unit.component.spec.ts` - this is a file for testing the component. We will not deal with it in this tutorial.
* `input-button-unit.component.ts` - this is the component file where we will define its logic.
* `input-button-unit.component.html` - this is the HTML template file, if you're not using inline-template.

Open the file `input-button-unit.component.ts`. You can see that the Angular CLI has generated the component's configuration for us, including its selector, which is the name we gave preceded by the prefix `app`, and a default template:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
```
{% endcode %}

> The prefix `app` will be added to the component selector of all the components you will generate. This is to avoid name conflicts with other components and HTML elements. For instance, if you create a component named input it will not conflict with HTML's `<input />` element, since its selector will be `app-input`.
>
> `app` is the default prefix, which is good for your main application. However, if you're writing a library of components to be used in other projects, you should choose a different prefix. For example, the [Angular Material](https://material.angular.io/) library uses the prefix `mat`. You can create a project stating the prefix of your choice using the flag `--prefix`, or change it afterwards in the file `angular.json`.

We can use this component as-is and see the result!

Open the root component file, `app.component.ts` and add the app-input-button-unit tag inside the template \(remember we refactored the root component to have an inline template\):

{% code title="src/app/app.component.ts" %}
```markup
template: `
  <h1>
    Welcome to {{ title }}!
  </h1>

  <app-input-button-unit></app-input-button-unit>
`,
```
{% endcode %}

Check what's new in the browser!

Let's add some content in our new component. First, add a `title` member which we will use as the todo item title:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```typescript
export class InputButtonUnitComponent {
  title = 'Hello World';
```
{% endcode %}

It will not interfere with the `app-root` component's `title`, since each component's content is encapsulated within it.

Next, add an interpolation of the title member in the template:

{% code title="src/app/input-button-unit/input-button-unit.component.ts" %}
```markup
template: `
  <p>
    input-button-unit works!
    The title is: {{ title }}
  </p>
`,
```
{% endcode %}

Check out the result!

This component doesn't do much at this point. In the following chapters, we will learn about the component class, and then implement the component's logic.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0_04-a-new-component)
{% endhint %}

## 💾 Save your code to GitHub

Great job adding your first component! Let's save your work to GitHub so your code is accessible outside of your local machine. Go to [Appendix 1: Git and GitHub](../appendix-1-git-and-github.md) for instructions to publish your code.

{% hint style="info" %}
**StackBlitz Instructions** ![](../../.gitbook/assets/stackblitz-hint.svg)

We will save code within StackBlitz so you can skip the GitHub sections below. Save your work in progress by pressing **Save** in the toolbar.
{% endhint %}


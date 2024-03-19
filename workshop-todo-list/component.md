# #3: 📐 Component

One approach in Web development (and software development in general) is component-based architecture. In the past years it has gained a lot of popularity. What is a component?

In [Service-Oriented Architecture (SOA) vs. Component Based Architecture](http://www.worldcolleges.info/sites/default/files/enggnotes/soa_vs_component_based.pdf), Helmut Petritsch defines a component as follows:

> A component is a software object, meant to interact with other components, encapsulating certain functionality or a set of functionalities. A component has a clearly defined interface and conforms to a prescribed behaviour common to all components within an architecture.

In Web applications, **a component controls a patch of screen called a view**. It's a part of what you will eventually see on the screen. It has a template, which defines its visual structure. It also has logic which defines the behavior and the dynamic values. The logic part is JavaScript code and is called the controller.

Here's a diagram of a component in Angular, with the result below.

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

Directives, pipes and services are other building blocks in Angular, which can be used in a component (in the diagram we see only the usage of a pipe). We will discuss them later in the tutorial.

Let's take a look at the component that was created by the Angular CLI. All the relevant files exist in the folder `src/app`. Open the file `app.component.ts`.

Just like ngModules that we saw in the previous chapter, a component is also defined by a class with a decorator. This is the class definition:

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```typescript
export class AppComponent {
  title = 'todo-list';
}
```
{% endtab %}
{% endtabs %}

It has one member called "title". It is a property to which you can assign a value. The value assigned to it here is the name of your application, the string "todo-list".

Angular takes care of synchronizing the members of the component with the component template. So we can easily use the member `title` in the template. Take a look at the template attached to the component in the file `app.component.html`. Near the middle of the file (around line 345), you'll see code like this:

{% tabs %}
{% tab title="src/app/app.component.html" %}
```markup
<span>{{ title }} app is running!</span>
```
{% endtab %}
{% endtabs %}

The double curly braces and their content are called [**Interpolation**](https://angular.io/guide/glossary#interpolation). This is one form of **data binding** in Angular. As we mentioned before, the code in this file is not used as-is when the browser renders the component. Angular compiles it to JavaScript code. In one of the compilation steps, it looks for Interpolations inside the template. The content of the Interpolation is an "Angular template expression" (which is a lot like JavaScript). The expression is evaluated at runtime, and then you see the result.

Interpolation is one of the strongest, most basic features in Angular. It has existed from the very beginning of Angular - in the first version (AngularJS). It makes it really simple to insert dynamic data into the view.

In this component, the expression is simply the member of the component class, `title`. **Let's try to change it.** Try out the following and see the result in the browser. (With every change you save in the file, the browser will refresh automatically!)

* Remove the curly braces and keep just the content `title`.
* Put the curly braces back and replace the content with some mathematical expression, for example: `{{ 2 + 2 }}`. (The spaces are not mandatory, they just make the code more readable.)
* Write a mathematical expression combined with the `title` member: `{{ title + 10 }}`
* Pass an undefined variable to the expression - a variable which was not declared in the component class. For example: `{{ x }}`
* Try out anything you'd like. Don't worry - you can't do any harm to the browser or the computer! In the worst case, the browser will run out of memory and will get stuck. (But you'll have to write something really complicated to make that happen!)

This is one way that you can bind members of the component's controller to its template. How does Angular know that this is the template of the App component?

Let's go back to the file `app.component.ts` and look at the component's metadata defined in the decorator `@Component` right above the class definition:

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
```
{% endtab %}
{% endtabs %}

We pass an object of definitions to the decorator. The property `templateUrl` tells Angular where to look for the template attached to the component. There is another option to point to the template, which we'll discuss later: to write the whole template inline here, in the component definition.

The property `styleUrl`, tells Angular where to look for the style file that defines the style of this component.  SCSS is a pre-processor for CSS. It provides conveniant syntax for writing CSS rules, and is compiled to CSS. In SCSS you can write regular CSS with or without using the special capabilities of the pre-processotr. You can take a look at the SCSS file `app.component.scss` - you'll see that it's empty. You can add some CSS style here, for example:

{% tabs %}
{% tab title="src/app/app.component.scss" %}
```css
h1 {
  color: red;
}
```
{% endtab %}
{% endtabs %}

We'll add more styles later on.

**Note:** the Angular CLI supports css-extension languages out-of-the-box: scss, sass, and less.

The first property, `selector`, tells Angular what will be the name of the tag that we'll use to call the component. As we saw in the file `src/index.html`, we use the app component inside the body:

{% tabs %}
{% tab title="src/index.html" %}
```markup
<body>
  <app-root></app-root>
</body>
```
{% endtab %}
{% endtabs %}

The element `app-root` is not an HTML element. It is the component that was created with the selector `app-root`. Try changing the selector. You'll see that if you change it in only one of the files, nothing will be displayed, since the element is no longer replaced with an Angular component. You can see an error message in the browser's console.

The `standalone` property tells Angular and us that the component is not part of anyAngular Module - `NgModule`.  Angular Modules were mandatory in previous versions of Angular. In later versions they have become optional, and components can be defined without them, hence standalone.

The `imports` array is used to state Angulae capabilities that are needed in this component. `CommonModule` enables built-in control flow, directives, and more. `RouterModule` is needed to define routing capabilities - router outlet (which is used in the boilerplate template) and links. When using Angular Modules, the imports can be defined there.&#x20;

One last thing: the first two lines in the component file import code from other files. For instance,  `Component`  defines the decorator `@Component`. (A decorator is a function, which one of its parameters is what's written right after calling it.) It is needed to use the decorator, which is defined in the imported file (or actually, in one of its own imports). Try removing this line, and see the error.

## Inline Template

Let's move the template to be **inline** in the component definition. This will help us manage the template while looking at its functionality. In the file `app.component.ts` replace the line

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```typescript
templateUrl: './app.component.html',
```
{% endtab %}
{% endtabs %}

with

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```typescript
template: ``,
```
{% endtab %}
{% endtabs %}

Notice the **backticks** - **\`\`** - they are used to define Template Literals, which are new in JavaScript (ES6). This way you can define multi-line strings. They have another cool ability: to easily use JavaScript variables and expressions within the string (with no relation to Angular binding expressions in the template). Read about it in the [MDN documentation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template\_literals).

Make sure you replace `templateUrl` with `template`, and don't forget the comma at the end of the line.

Now instead of taking the content from the original template, we'll insert a more simple template which we can work with. When the cursor is between the backticks, press Enter and insert the HTML template:

{% tabs %}
{% tab title="src/app/app.component.ts" %}
```markup
template: `
  <h1>
    Welcome to {{ title }}!
  </h1>  
`,
```
{% endtab %}
{% endtabs %}

It is easier to manage the template when you see its controller at the same time. This is true as long as the template doesn't get too big and the controller doesn't get too complicated. If they do, it's a sign you should refactor your code by breaking it down to child components.

At this point you can delete the file `app.component.html`.

**We recommend continuing this tutorial using inline templates in the components.** Especially if you're working on a laptop with a small screen, where there isn't enough space to open two files side-by-side.

Let's configure the Angular CLI to give us inline-template as a default. In the terminal run the command: `ng config schematics.@schematics/angular.component.inlineTemplate true`. Now every component that you'll generate will have an inline template, and an HTML file will not be created.

If you wish to continue this tutorial with templates in separate HTML files, do not run this command, and use the generated `.html` files for the templates.

> **Background:** You can specify that you'd like to use inline-template throughout the project in several ways:
>
> * When generating a project, pass the flag `-it` or `--inline-template` like this: `ng new todo-list -it`
> * After generating a project, add it to the configuration so that components generated from this point on will have an inline template: `ng config projects.YOURPROJECTNAME.schematics.@schematics/angular:component.inlineTemplate true`. This adds the line `inlineTemplate: true` in the Angular CLI configuration file `angular.json`. You can also edit the file directly.
> * If you haven't configured to have inline templates as a default, you can specify this per component when you generate it, by passing the flag `-it` or `--inline-template`. For example: `ng generate header -it`.

The same way we use inline template, we can use also inline styles. But for now we will keep the styles in a separate file.

{% hint style="info" %}
**StackBlitz Instructions** ![](<../.gitbook/assets/stackblitz-hint (1) (2).svg>)

StackBlitz doesn't support the inline template configuration setting. We will need to manually move the template code from the `.html` file to the `.component.ts` file each time we create a new component. Don't worry! Just watch for the StackBlitz instructions info panel and we'll walk you through it.
{% endhint %}

## Summary

We have explored the root component that was generated for us by the Angular CLI, and even refactored it. In the next chapter, we will create a new component. We will start building the tree of components, which defines the structure of the application.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_03-component)
{% endhint %}

# \#2: 🅰 Angular kicks in

Before we start to develop our app, let's look at the project and how Angular gets in the picture. All the relevant files at this stage on exist inside the 📁**src** folder.

If you're really eager to start coding, you can skip this chapter and come back to it later to understand the project structure.

Open the file ![](.gitbook/assets/html.svg)**index.html**. The content that is rendered in the browser's window is everything you see inside the `<body>` element. All you can see there now is another, non-HTML element:

{% code title="index.html" %}
```markup
<todo-root></todo-root>
```
{% endcode %}

This element is a actually an Angular Component, defined in the file  
![](.gitbook/assets/component.svg)**app.component.ts** with the class named `AppComponent`. \(We'll take a look at it in the next chapter\).

{% hint style="info" %}
StackBlitz![](.gitbook/assets/stackblitz.png) creates the project with the default prefix `app` as component selector. So the element you'll see will be `<app-root>`You can change the configuration in the file ![](.gitbook/assets/json.svg)**angular.json** \( old: ![](.gitbook/assets/json.svg) .**angular-cli.json** \). We use: `todo`.
{% endhint %}

\*\*\*\*

> Angular can be defined in many ways. One of them is JavaScript code which runs when the application is presented in the browser. All the code you will write - components, modules, services, etc. - are recognized by Angular. Angular will perform actions accordingly. For example, components you will write and use will be compiled to JavaScript functions. These functions insert the component content into the DOM \(Document Object Model\) which the browser uses to show the application. That's how you'll see the component you created on the screen.

So `<todo-root>` is not an HTML element, it is an Angular Component. When the application is ready, the content of the component is inserted inside the `<todo-root>` tag.

The `<todo-root>` tag starts off empty. Everything inside the tag will be rendered by the browser after Angular compiles the application. When Angular is done, the tag will no longer be empty. Instead, you will see the `<todo-root>` component and its content, which starts with "**Welcome to todo!**".

Let's learn a bit about Angular applications' main building block - the Angular module.

## NgModule

Angular needs us to define what we want it to compile. For this we define Angular Modules, or **NgModules**, which are like packages of related things. These packages can include components, services, directives, pipes, and other NgModules. We already have a root NgModule defined for us in the  
📁 **app** folder called ![](.gitbook/assets/module.svg) **app.module.ts**. Let's take a look at this file.

The last line in the file defines a JavaScript class:

{% code title="app.module.ts" %}
```typescript
export class AppModule { }
```
{% endcode %}

`export` is a reserved word in JavaScript. It exposes whatever is defined after the `export` keyword, in this case `AppModule`, so that other files can used the exposed code using the `import` statement. You can see examples of classes imported from other files at the top of this file.

The class `AppModule` is empty. It will get its functionality from Angular, which will identify its role by the code preceding this line, starting with `@NgModule({`.

Every entity in Angular \( ![](.gitbook/assets/module.svg) NgModules, ![](.gitbook/assets/component.svg) components, ![](.gitbook/assets/service.svg)services,  
![](.gitbook/assets/directive.svg)directives and ![](.gitbook/assets/pipe.svg)pipes\) is just a **class with a decorator**. The decorator tells Angular the role of this class.

`@NgModule({...})` is a decorator. A decorator is just a function. When using it, we put `@` before its name. This way it becomes a decorator: it looks at what is written right after the function call and receives it as an argument. Decorators usually do something with what they decorate. In this case, for example, `NgModule` receives the `AppModule` class and adds methods and members to it that later on will be used by Angular. This way, Angular will recognize that this class represents an NgModule.

What we pass into the decorator function is used by Angular to decorate the class. You can see we pass an object with members, each member is a list of other classes. We'll explain shortly what each member represents.

**declarations**: a list of Angular things that are relevant in this module. They may use each other \(for example, a directive used in a component\). We pass here only one component - `AppComponent`, because that's all we have in our application right now.

**imports**: a list of other NgModules which are needed for this module. For example, we may use things from `FormsModule` - directives and services, inside the `AppComponent`.

**bootstrap**: this member is relevant only to the root NgModule. You will not find it in the modules in the imports list, for example. It tells Angular which component should be used as the root component of the application. Every component can use other components in its template. We have one root component that starts the whole structure. So we actually get a **tree structure** of the components that build our application. In this case, the root component is `AppComponent` \(with the selector `todo-root`\). We saw it used in `index.html` as the only component inside the `<body>`.

How does Angular know that the `AppModule` is the root NgModule? This is defined in the file **main.ts**:

{% code title="main.ts" %}
```typescript
platformBrowserDynamic().bootstrapModule(AppModule)
```
{% endcode %}

We bootstrap our root NgModule to a renderer. This way we tell Angular what NgModule to use as the starting point of our application. And we also choose a renderer: `platformBrowserDynamic`. It knows how to take our code and add the relevant data \(elements, attributes, etc.\) to the browser's DOM.

If there's an error, it is caught and logged in the browser's console \(seen only when the browser's dev-tools are open\).

We can use a different renderer at this point, for example one that renders to Android or iOS native elements! We just need a renderer that knows how to take our templates \(which use HTML notation\) and JavaScript code, and create native mobile application elements. An example of such a renderer is [NativeScript](https://www.nativescript.org).

There are even renderers to Arduino, with which you can connect sensors, buttons, LEDs, and other hardware to your application! You can see a great example for this here: [Building Simon with Angular2-IoT](https://medium.com/@urish/building-simon-with-angular2-iot-fceb78bb18e5#.430qu216w)

We've seen how we tell Angular where and how to start its work, how we define the root module and the root component, and how we use the root component.

In the next chapter, we'll see how a component is defined in Angular.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-02_Angular_kicks_in)
{% endhint %}


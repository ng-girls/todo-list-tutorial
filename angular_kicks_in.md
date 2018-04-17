# Angular kicks in

Let's look at the project and how Angular gets in the picture. All the relevant files at this stage on exist inside the `src` folder.

Open the file `index.html`. The content that is rendered in the browser's window is everything you see inside the `<body>` element. All you can see there now is another, non-HTML element: `<todo-root>`. This element is a actually an Angular Component, defined in the file `app/app.component.ts` with the class named **AppComponent**. \(We'll take a look at it in the next chapter\).

**Note:** StackBlitz is creating the project by default without a prefix. Then the element you'll see will be `<app-root>`. `app` is the default prefix for the project's component selectors. You can change the configuration in the file `.angular-cli.json`.
Our starting point uses the prefix `todo-`.

Angular can be defined in many ways. One of them is JavaScript code which runs when the application is presented in the browser. All the code you will write - components, modules, services, etc. - will be recognized by Angular. Angular will perform actions accordingly. For example, components you will write and use will be compiled to JavaScript functions. These functions insert the component content into the DOM - the Document Object Model - which the browser uses to show the application. That's how you'll see the component you created on the screen.

So `<todo-root>` is not an HTML element, it is an Angular Component. When the application is ready, the content of the component is inserted inside the `<todo-root>` tag.

The `<todo-root>` tag starts off empty. Everything inside the tag will be rendered by the browser after Angular compiles the application. When Angular is done, the tag will no longer be empty. Instead, you will see the `<todo-root>` component and its content, which starts with "**Welcome to todo!**".

Angular needs us to define what we want it to compile. For this we define Angular Modules, or **ngModules**, which are like packages of related things. These packages can include components, services, directives, pipes, and other ngModules. We already have a root ngModule defined for us in the file `app/app.module.ts`. Let's take a look at this file.

The last line in the file defines a JavaScript class:

```ts
export class AppModule { }
```

`export` is a reserved word in JavaScript which says that whatever is defined after it should be exposed to other files that import this one using the `import` statement. You can see examples of classes imported from other files at the top of this file.

The class `AppModule` is empty. It will get its functionality from Angular, which will identify its role by the code preceding this line, starting with `@NgModule({`.

Every entity in Angular (ngModules, components, services, directives, and pipes) is just a **class with a decorator**. The decorator tells Angular the role of this class.

`@NgModule({...})` is a decorator. A decorator is just a function. When using it, we put `@` before its name. This way it becomes a decorator: it looks at what is written right after the function call and receives it as an argument. Decorators usually do something with what they decorate. In this case, for example, `NgModule` receives the `AppModule` class and adds methods and members to it that later on will be used by Angular. This way, Angular will recognize that this class represents an ngModule.

What we pass into the decorator function is used by Angular to decorate the class. You can see we pass an object with members; each member is a list of other classes. We'll explain shortly what each member represents.

**declarations**: a list of Angular things that are relevant in this module. They may use each other \(for example, a directive used in a component\). We pass here only one component - `AppComponent`, because that's all we have in our application right now.

**imports**: a list of other ngModules which are needed for this module. For example, we may use things from `FormsModule` - directives and services, inside the `AppComponent`.

**providers**: a list of services which will be provided at the application root. A service is also a class, and by providing it, a single instance (singleton) is created for the whole application. We will talk about services later on.

**bootstrap**: this member is relevant only to the root ngModule. You will not find it in the modules in the imports list, for example. It tells Angular which component should be used as the root component of the application. Every component can use other components in its template. We have one root component that starts the whole structure. So we actually get a **tree structure** of the components that build our application. In this case, the root component is `AppComponent` (with the selector `todo-root`). We saw it used in `index.html` as the only component inside the `<body>`.

How does Angular know that the `AppModule` is the root ngModule? This is defined in the file `main.ts`:

```ts
platformBrowserDynamic().bootstrapModule(AppModule)
```

We bootstrap our root ngModule to a renderer. This way we tell Angular what ngModule to use as the starting point of our application. And we also choose a renderer: `platformBrowserDynamic`. It knows how to take our code and add the relevant data \(elements, attributes, etc.\) to the browser's DOM.

We can use a different renderer at this point, for example one that renders to Android or iOS native elements! We just need a renderer that knows how to take our templates \(which use HTML notation\) and JavaScript code, and create native mobile application elements. An example of such a renderer is [NativeScript](https://www.nativescript.org).

There are even renderers to Arduino, with which you can connect sensors, buttons, LEDs, and other hardware to your application! You can see a great example for this here: [Building Simon with Angular2-IoT](https://medium.com/@urish/building-simon-with-angular2-iot-fceb78bb18e5#.430qu216w)

We've seen how we tell Angular where and how to start its work, how we define the root module and the root component, and how we use the root component.

In the next chapter, we'll see how a component is defined in Angular.

[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-02_Angular_kicks_in)

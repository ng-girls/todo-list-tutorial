# \#1: Template-driven forms

Let's start refactoring our app to use a form for submitting a new To Do item into list.

## Use HTML form elements and import `FormsModule`

First we need to change the template of `InputButtonUnitComponent` to use HTML form elements by wrapping everything with `<form>` tag and add the `type="submit"` attribute to the button. When complete, your template looks something like this:

```markup
<form>
  <div class="form-group">
    <input class="todo-input form-control"
           #todoItem
           [value]="title"
           (keyup.enter)="submitValue(todoItem.value); todoItem.value = ''">
  </div>
  <button mat-raised-button
          color="primary"
          type="submit"
          (click)="submitValue(todoItem.value); todoItem.value = ''">
    Save
  </button>
</form>
```

Angular apps need supporting code from a library to build Angular Forms. Template-driven forms require the `FormsModule`.

To use the `FormsModule` add it to the array of imports in the `AppModule` in `app.module.ts`. Don't forget to import the library at the top of the `app.module.ts` file.

## 2-way data binding

As with almost everything in software development, there are multiple ways to implement a solution for a feature. We want a way to capture user input in the different form fields and bind that input to properties in the component so that we can easily access the information. To help us do so, we will use `[(ngModel)]` \(`[()]` syntax is called banana in the box\). Take a moment to read more about it in [the Angular forms documentation](https://angular.io/api/forms/NgModel#description).

One thing to note is when using `ngModel`, each form control needs to have a `name` [attribute](https://angular.io/api/core/Attribute).

First add the template variable for the form, then let's use `ngModel` on the To Do title to bind with our pre-existing `title` property \(the one in `.ts` file\) and to the template reference variable for our form \(`#` syntax\).

Try to do it by yourself with help of [Angular Forms guide](https://angular.io/guide/forms). 💪

Your template after adding those changes should look similar to this:

```markup
<form #itemForm="ngForm">
  <div class="form-group">
    <input class="todo-input form-control"
           #todoItem
           [value]="title"
           name="title"
           [(ngModel)]="title"
           (keyup.enter)="submitValue(todoItem.value); todoItem.value = ''">
  </div>
  <button mat-raised-button
          color="primary"
          type="submit"
          (click)="submitValue(todoItem.value); todoItem.value = ''">
    Save
  </button>
</form>
```

## Submitting the value

We now need to handle the user entry and form submission. Let's attack this by adding the bindings to submit the form in the template and handle the submit action in the component.

### Add submit bindings to template

You added `type="submit"` to your button but at the moment it's not used at all. The addition of items works due to old logic on button click and pressing Enter.

Let's remove the click handler and use `ngSubmit` which is part of `ngForm` directive instead. The syntax is similar to the click handler, but instead of handling the `(click)` action by calling a method, we handle the `(ngSubmit)` action and call a method.

Replace the click handler with `(ngSubmit)="onSubmit()` in your `<form>` tag. The form will now know that when user wants to submit the value it needs to run `onSubmit()` function/method.

The submit handler now expects to call a method called `onSubmit()`, but instead of writing a new method, we can use `submitValue` method after we apply a small refactoring change.

Let's change the submit handler to call `submitValue()` instead. For the input parameter, instead of passing the `#todoItem` value, we can pass the entire form by refering to the template variable for the form, such as `(ngSubmit)="submitValue(itemForm)"`.

You can also add `required` directive to the input so it will not allow to submit empty value.

The template is now ready, but we need to refactor `.ts` file.

### Handle the submit action in the component

First of all, when sending entire form to the function, we're passing in a different data type, in this case a data type of `NgForm`. Update the input parameter name and type to match the new data type we're passing in.

We verify the existence of the input parameter is in the `submitValue()` method. Now that we are passing in the entire form as the input parameter, we can use the built-in properties of `NgForm` to check validity. In your `if` statement, check for `NgForm`'s `valid` property.

What about value from input? `NgForm` allows to get values from the form. You've gave the `name` attribute value `title` and now you may refer directly to it \(`newTitleForm.value.title`\).

Check out your hard work by adding a `console.log()` to `newTitleForm` to see the results. 🎉

The refactored function looks similar to:

```typescript
  submitValue(newTitleForm: NgForm) {
    if (newTitleForm.valid) {
      this.submitItem.emit(newTitleForm.value.title);
    } else {
      alert('Form is invalid');
    }
  }
```

Try to use `NgForm` methods to clear inputs after submitting a value.

See the final result on [StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/4_01-template-form).


# \#2: Reactive forms

Great job implementing a template-driven form! Let's move to second approach, reactive forms.

We could try to implement the same to do item form using reactive forms, but to fully take advantage of this powerful form library, you will create a separate and more complex form for gathering basic user info.

## Create the component for user info

Let's start by creating a new component using the Angular CLI. We will tutorial we will name it `user-info` but feel free to name it whatever you want.

Once you finish creating the component, we are ready to start implementing reactive form.

## Adding your first reactive form

The first step is to import `ReactiveFormsModule` library in `AppModule` and add it to the imports array.

To build a form control in reactive form you have to use `FormControl` class and we can do so by creating a new instance of this class in the `UserInfo` component.

```typescript
firstName = new FormControl('initial state');
```

Don't worry about setting the initial state of `firstName`.

You also need to register this control in your template in the same way you needed to define `[(ngModel)]` in template-driven form.

```markup
<input type="text" matInput [formControl]="firstName" required>
```

## Adding more form controls

But what if you want more than one form control? Angular lets us add multiple form controls and group collections of controls together in a `FormGroup`!

```typescript
userFormGroup = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
  phone: new FormControl(''),
  hobby: new FormControl(''),
  bestFriendName: new FormControl(''),
  dateOfBirth: new FormControl(''),
});
```

Now inside form in HTML you'll register both `FormGroup` and all the `FormControl`s. Take a moment to do so by using the documentation to [create a FormGroup from angular.io](https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance).

Make sure that each HTML input element has the proper `type` attribute.

Once complete we can start playing with it.

## Adding validation

You can add the `required` attribute to HTML elements to force inputs as required but the HTML attribute may not enough. To properly handle form validation, each `FormControl` should define its own validation rules. Take a moment to read through the [form validation section on angular.io](https://angular.io/guide/form-validation) and add the appropriate validation rules in your code.

To provide visual indication of form validation state, bind the disabled attribute on the submit button to the `invalid` property on the form. It will look like `[disabled]="userFormGroup.invalid"`.

Try to play a bit with validators! For example, you can add pattern validator that only accepts values from limited word range. Pattern validation uses [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) as an argument. You can find example patterns and a handy [online pattern testing tool online](https://regex101.com/).

## Submit the form

Submitting the form works like in template-driven forms when it comes to HTML part, but we won't use a service to save the form data.

Instead we'll store the different form input properties as locally so that we can experiment with reactive forms. Save your form data inside class property named `gatheredUserInfo`. We encourage you to create new type that reflects the structure of data of the form \(feel free to define the new interface in the same `.ts` file - above or below component class declaration\).

Find the methods and properties of `FormGroup` that allows you to get the raw data of the form from the angular.io documentation. Save the data inside a variable and reference it inside `onSubmit()` method. Try challenging yourself to read the documentation and applying the concepts yourself before asking for help. 💪

## Display the form data

Because we store form data as properties within the component file, we can access the data to display in the HTML like we've done before with data binding using interpolation.

For example, you can create a HTML element to display data like this:

```markup
  <p>Name: {{ gatheredUserInfo.firstName }}</p>
```

Display the remaining form data. Can you see all the form data in your template? Great job! Let's try experimenting with `FormGroup` some more.

## Editing form inputs

`FormGroup` comes with very powerful methods such as `setValue` and `patchValue`. You may have already come across those methods when looking for `getRawValue`. Let's try it out!

To see one of those in action, please:

1. Add a few properties int the class that you would like to use as default values in your form.
2. Add a button which will call `fillDefault` function.
3. Prepare logic inside that function which will patch default values into your form.
4. Try referring to the angular.io documentation- it is crucial for you to learn how to find documentation and apply it to your code as part of your coding journey.

Is everything is working? Nice job! Now let's make the form input elements more visually appealing by adding in Angular Material.

Add [MatFormFields](https://material.angular.io/components/form-field/overview) and [Material Buttons](https://material.angular.io/components/button/overview) into the existing template.

Wow! Doesn't it look amazing now?

Let's move to another "game" with form- enable input elements.

For each element where we display gathered info, add a button which will trigger editing functionality. Your code may look something like:

```markup
  <p>Name: {{ gatheredUserInfo.firstName }}
    <button
      mat-icon-button
      (click)="editField('firstName')">
      <mat-icon>edit</mat-icon>
    </button>
  </p>
```

Notice we added a click handler on the button where we call a function- `editField(fieldName)`.

We provide field name as a string, but if you want to do it with element reference feel free to try it :\)

Our edit function enables the control that gathers the specific information we want. In the example above when we click on the edit button next to displayed name we will enable `firstName` field inside `userFormGroup`.

Do you know what will be inside `editField` function? 🤔

You got it! We can use the `enable()` method on the control like this- `this.userInfoGroup.controls[fieldName].enable();`.

Since you've had more freedom this time with coding your solutions on [StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/4_02-reactive-form) there is one example of a solution. Your code may look quite a bit different and we celebrate your creativity!

Please take a moment to discuss any that comes to mind with your mentor.


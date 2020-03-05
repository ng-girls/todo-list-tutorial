# \#3: Form builder

## Form builder

Sometimes creating form control instances manually becomes repetitive so we can utilize the help of the `FormBuilder`.

To use [FormBuilder](https://angular.io/guide/reactive-forms#generating-form-controls-with-formbuilder) you need to define it in constructor of your class. Let's refactor the existing reactive form.

As you can see in the example link above, with the `FormBuilder` service you don't need no longer to create a new instance of `FormGroup` and `FormControl` each time- it will take care of it for you!

Refactoring should go smoothly, but if you have problems feel free to ask your mentor for help.

## FormArray

Imagine that you would like to also add to the form control a way to input skills, but instead of providing long text in one input we want to separate it into different inputs. How do we know how many input controls we need? Well, you can add inputs dynamically by starting with one and adding the next one as we need! This useful ability comes from `FormArray`

> FormArray is an alternative to FormGroup for managing any number of unnamed controls.

Add the skills form controls by updating the `FormBuilder`.

We need to nest`FormBuilder`s and utilize the `array` method like this for the `skills` form control:

```typescript
this.formBuilder.array([
      this.formBuilder.control('')
    ])
```

Handle adding new form control by adding a button `Add skill` which triggers `addSkills` method defined in the class.

This method in turn should push new form control into existing array of controls.

It needs to know where to look for this array- you may create a skills [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) which will return `skills` marked `as FormArray`. Now when we have reference to skills in `FormGroup` we know where we should push new form control.

```typescript
  get skills() {
    return this.userInfoGroup.get('skills') as FormArray;
  }

  addSkills() {
    this.skills.push(this.formBuilder.control(''));
  }
```

Update user information type and view of gathered info so you could see skills you are adding.

In the end your code should look more or less like this on [StackBlitz](https://stackblitz.com/github/pelagia123/todo-list-tutorial/tree/form-builder/examples/4_03-form-builder?file=src%2Fapp%2Fuser-info%2Fuser-info.component.ts)

If you've finished everything and still you want to do something you may create more forms or start looking at unit tests. Writing tests may actually teach you a lot about what and how you are coding.


# \#17: 💾 Local storage

We would like to persist the todo list on our computer, so that when accessing or reloading the app we'll see the list with the changes we've made. Ideally the list would be saved in a database, but we will implement a simple version using the browser's own storage.

## What is local storage?

Local storage, as its name implies, is a tool for storing data locally. Similar to cookies, local storage stores the data on the user's computer, and gives us, as developers, a quick way to access this data for both reading and writing.

> There are libraries you can use that give you a wider range, more generic, robust methods to manage the data in the local storage. Here we will implement a simple solution.

## Browser support

As local storage was first introduced to us along with HTML5, all browsers that support HTML5 standard will also support local storage. Basically, it's supported by most modern web browsers, including IE 8.

## We want to see some code!

First, in order to use local storage, we can simply access a `localStorage` instance which is exposed to us globally. That means that we can call all available methods in this interface by simply using this instance.

Local storage stores data as keys and values, and the interface is quite simple. It has two main methods: `getItem` and `setItem`. Here's an example of using them:

{% code title="code for example" %}
```typescript
localStorage.setItem('name', 'Mor');

let name = localStorage.getItem('name');
alert('Hello ' + name + '!');
```
{% endcode %}

Another useful method is `clear`. It's used to clear all the data from local storage:

{% code title="code for example" %}
```typescript
localStorage.clear();
```
{% endcode %}

There are a few more wonderful methods you can use, as described [here](https://developer.mozilla.org/en-US/docs/Web/API/Storage).

## Angular time \(back to our app\)

In the following section, we will build a local storage service that later on will be used to store our todo list items. It will be a generic service for lists of objects. We'll need to tell it the name of data we're looking for \(a key\), so we can use it to store other lists as well.

As in earlier chapters, we will generate the service using StackBlitz. We will name the new service component `todo-list-storage`

The new file, ![](.gitbook/assets/service.svg)**todo-list-storage.service.ts**, will be created with the following code:

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class TodoListStorageService {

  constructor() { }

}
```
{% endcode %}

**If something looks unfamiliar or confusing to you, please refer to the** [**Service chapter**](service.md) **for more detailed information about services.**

We need to provide the service in our NgModule. Open ![](.gitbook/assets/module.svg)**app.module.ts** and add the new class to the `providers` list:

{% code title="src/app/app.module.ts" %}
```typescript
providers: [TodoListService, TodoListStorageService],
```
{% endcode %}

Make sure the class is also imported into the file:

{% code title="src/app/app.module.ts" %}
```typescript
import { TodoListStorageService } from './todo-list-storage.service';
```
{% endcode %}

Lets start by adding a private property to our service `todoList` which will hold the list items.

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
private todoList;
```
{% endcode %}

In addition, let's add a constant that will store the name of the key we want to use for our local storage, add it right after the imports:

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
const storageName = 'aah_todo_list';
```
{% endcode %}

Now we want to initialize this property with data, by retrieving it from `localStorage`, so within the constructor, add:

{% code title="todo-list-storage.service.ts" %}
```typescript
constructor() {
  this.todoList = JSON.parse(localStorage.getItem(storageName));
}
```
{% endcode %}

Wait! Wait! why `JSON.parse`? The answer is simple: As described earlier in this tutorial, local storage stores data as key-value pairs, and the values are stored as **strings**. So, if we want to have a real object to work with, we must parse the string into a valid object.

Now let's start doing some real stuff, but first we will declare all the public methods we want to expose in this service, which are **get, post, put**, and **destroy**. Our service should now look similar to:

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

@Injectable()
export class TodoListStorageService {

  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName));
  }

  // get items
  get() {}

  // add a new item
  post(item) {}

  // update an item
  put(item, changes) {}

  // remove an item
  destroy(item) {}

}
```
{% endcode %}

We will now implement them one by one.

### get

This method will simply return the current state of items stored in the service:

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
  get() {
    return [...this.todoList];
  }
```
{% endcode %}

If you are not familiar with the `...` operator, please refer to [this documentation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator) for more information.

### post

This method will be responsible for adding a new item, and returning the new list. It accepts one parameter, `item`, which will be the item to add:

{% code title="todo-list-storage.service.ts" %}
```typescript
  post(item) {
    this.todoList.push(item);
    return this.get();
  }
```
{% endcode %}

Some of you might notice that we just pushed a new item to the array. But what about the local storage? We must also synchronize it with the new array!

Lets add a new **private** method in our service, which will be used internally to update the stored list:

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }
```
{% endcode %}

Let's explain. Here we use the simple method of `setItem`, which takes a key \(the first argument\) and a string value \(the second argument\) and stores it in local storage. After we update the value, we simply return the new list using the `get` method we implemented earlier.

Now we need to modify our `post` method to use `update` so everything is synchronized in harmony:

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
  post(item) {
    this.todoList.push(item);
    return this.update();
  }
```
{% endcode %}

### put

Here we want to update an existing item. Before that, let's add another private helper method `findItemIndex`, which will simply return the index of an item within the list array:

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
  private findItemIndex(item) {
    return this.todoList.indexOf(item);
  }
```
{% endcode %}

Now, we can use `Object.assign` to update an existing item:

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
  put(item, changes) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }
```
{% endcode %}

So what is going on here? `Object.assign` takes a target object \(the first argument\) and source objects \(all the rest of the arguments\), and copies the source objects to the target object. If a property exists on both the target and a source, this method will replace the old value with the new one. Here we want to update an item in the list, so first we find its index in the array, and then apply the changes to it. At the end, we want to synchronize the local storage \(`this.update`\) and return the new list.

### destroy

This method will remove an item from the list and then synchronize with local storage:

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
  destroy(item) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }
```
{% endcode %}

`splice(i, n)` removes `n` items starting from index `i`. In our code, we first find the index of the item to remove, and remove only it \(that's why we use 1 as the second parameter\).

## Add some default data

Let's assume we want our todo list to always have some default data to start with. We can add it by modifying our service, by adding in the constants section \(after the imports\):

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];
```
{% endcode %}

And then modify our constructor:

{% code title="src/app/todo-list-storage.service.ts" %}
```typescript
constructor() {
  this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
}
```
{% endcode %}

The above will make sure that if data was not yet stored in `localStorage`, our service will still have some default data to return. This also means you can completely remove the `todoList` array from `TodoListService`, since now the default list is handled here.

## Almost done!

Our service is now ready for work!

Now for our app to use the new local storage service, let's open up ![](.gitbook/assets/service.svg) **todo-list.service.ts** and modify it.

First we need to import the new service:

{% code title="src/app/todo-list.service.ts" %}
```typescript
import { TodoListStorageService } from './todo-list-storage.service';
```
{% endcode %}

Then, we need to inject it in the constructor so we will have an instance to work with:

{% code title="src/app/todo-list.service.ts" %}
```typescript
constructor(private storage:TodoListStorageService) { }
```
{% endcode %}

This will let us use `this.storage` across the todo-list service.

Let's also modify the current methods:

**Before**

{% code title="src/app/todo-list.service.ts" %}
```typescript
getTodoList() {
  return this.todoList;
}

addItem(item) {
  this.todoList.push(item);
}
```
{% endcode %}

**After**

{% code title="src/app/todo-list.service.ts" %}
```typescript
getTodoList() {
  return this.storage.get();
}

addItem(item) {
  return this.storage.post(item);
}
```
{% endcode %}

Now we have one last modification to make. Open up ![](.gitbook/assets/component.svg)**list-manager.component.ts** and modify the `addItem` method this way:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
addItem(title): void {
  this.todoList = this.todoListService.addItem({ title });
}
```
{% endcode %}

The above change will make sure that when we add a new item, our list will also be updated visually.

## Summary

In this tutorial we learned what local storage is and how to use it. We saw that `localStorage` is a great and a pretty straight-forward tool for developers to store data locally on the users' computers/devices. We then implemented a new service that uses `localStorage` to store the todo-list items, and updated the rest of the components to support this new service.

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/angularbootcamp/todo-list-tutorial-steps/tree/step-16_Local_storage)
{% endhint %}


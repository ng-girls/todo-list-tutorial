# \#17: 💾Local storage

We would like to persist the todo list on our computer, so that when accessing or reloading the app we'll see the list with the changes we've made. Ideally the list would be saved in a database, but we will implement a simple version using the browser's own storage.

## What is local storage?

Local storage, as its name implies, is a tool for storing data locally. Similar to cookies, local storage stores the data on the user's computer, and gives us, as developers, a quick way to access this data for both reading and writing.

> There are libraries you can use that give you a wider range, more generic, robust methods to manage the data in the local storage. Here we will implement a simple solution.

## Browser support

As local storage was first introduced to us along with HTML5, all browsers that support HTML5 standard will also support local storage.  
Basically, it's supported by most modern web browsers, including IE 8.

## We want to see some code!

First, in order to use local storage, we can simply access a `localStorage` instance which is exposed to us globally. That means that we can call all available methods in this interface by simply using this instance.

Local storage stores data as keys and values, and the interface is quite simple. It has two main methods: `getItem` and `setItem`. Here's an example of using them:

{% code-tabs %}
{% code-tabs-item title="code for example" %}
```typescript
localStorage.setItem('name', 'Angular');

let name = localStorage.getItem('name'); 
alert(`Hello ${ name }!`);
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Another useful method is `clear`. It's used to clear all the data from local storage:

{% code-tabs %}
{% code-tabs-item title="code for example" %}
```typescript
localStorage.clear();
```
{% endcode-tabs-item %}
{% endcode-tabs %}

There are a few more wonderful methods you can use, as described in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Storage).

## Angular time \(back to our app\)

In the following section, we will build a local storage service that will be used to store our todo list items. It will be a generic service for lists of objects. We'll need to tell it the name of data we're looking for \(a key\), so we can use it to store other lists as well.

As in earlier chapters, we will generate the service using the Angular CLI. We will name the new service `storage`

```bash
ng g s services/storage
```

The new file, `storage.service.ts`, will be created with the following code:

{% code-tabs %}
{% code-tabs-item title="src/app/services/storage.service.ts" %}
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

If something looks unfamiliar or confusing to you, please refer to the [Creating a Service chapter](creating-a-service.md) for more detailed information about services.

Since we cannot access an item on the list directly in the local storage, we'll implement only two methods: getting the data and setting the data. Changing the list will be done by the TodoListService. To each method we'll pass the key \(name\) of the data we want.

### getData

This method will get and return the data \(object, list, etc.\) stored in the service under the given key:

{% code-tabs %}
{% code-tabs-item title="src/app/services/storage.service.ts" %}
```typescript
  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Wait! Wait! why `JSON.parse`? The answer is simple: As described above, local storage stores data as key-value pairs, and the values are stored as **strings**. So, if we want to have a real object \(or list\) to work with, we must parse the string into a valid JavaScript object.

### setData

This method will save the given data \(object, list, etc.\) under the given key.

{% code-tabs %}
{% code-tabs-item title="src/app/services/storage.service.ts" %}
```typescript
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
```
{% endcode-tabs-item %}
{% endcode-tabs %}

That's it! Let's use this service in our `ToDoListService`.

> As mentioned above, this service could have a wider API with more robust methods. When you write a service for accessing a database you will have other methods for adding, modifying and deleting specific items.

## Use the ListStorageService

We'd like to use the newly created service from within `TodoListService`. First we'll inject the `StorageService` into the `TodoListService`, just like we injected the latter into `ListManagerComponent`. We'll ask for an instance of the service in the constructor, and make sure its class is imported. We'll move the default todo list outside the class. We'll also add a constant with the key of our storage.

> A better practice is to use the environments files for storing keys. This way you can manage different keys for each environment - development, production, staging, etc.

{% code-tabs %}
{% code-tabs-item title="src/app/services/todo-list.service.ts" %}
```typescript
import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) { }

  getTodoList() {
    return this.todoList;
  }
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

We'll keep a runtime version of the todo list in the service to help us manage it in the app - the `todoList` property. We'll initialize it in the constructor with either the list in the local storage, if exists, or the default one.

{% code-tabs %}
{% code-tabs-item title="src/app/services/todo-list.service.ts" %}
```typescript
constructor(private storageService: StorageService) {
  this.todoList = 
    storageService.getData(todoListStorageKey) || defaultTodoList;
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Now we'll implement the methods for managing our list.

### addItem

We'll push an item to the todoList \(same as before\) and then update the storage.

{% code-tabs %}
{% code-tabs-item title="src/app/services/todo-list.service.ts" %}
```typescript
addItem(item: TodoItem) {
  this.todoList.push(item);
  this.storageService.setData(todoListStorageKey, this.todoList);
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

### updateItem

Here we want to update an existing item. We'll assume that we hold the original item by reference, and can find it in the list. \(Other implementations may use an item ID to search the list.\) Then we'll replace it with a new version. Finally we'll update the storage.

{% code-tabs %}
{% code-tabs-item title="src/app/services/todo-list.service.ts" %}
```typescript
updateItem(item: TodoItem, changes) {
  const index = this.todoList.indexOf(item);
  this.todoList[index] = { ...item, ...changes };
  this.storageService.setData(todoListStorageKey, this.todoList);
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

So what is going on here?  
We locate the item in the list. Then in the same place we assign a new object, which is constructed from the original item and the changes made to it. We're using the spread operator for this: a new object is constructed, composed of the original set of keys and values \(`...item`\) which are overridden by the keys and values of `changes`. \(If a key in `changes` doesn't exist in `item`, it is added to the new object.\)

### DRY - Don't Repeat Yourself

You may have noticed that we have the same line of code both in `addItem` and in `updateItem`:

{% code-tabs %}
{% code-tabs-item title="src/app/services/todo-list.service.ts" %}
```typescript
this.storageService.setData(todoListStorageKey, this.todoList);
```
{% endcode-tabs-item %}
{% endcode-tabs %}

We'd like to reduce code repetition, and extract the repeated code into a method. You can use the IDE to help you extract the method. Select the line above, then right click and search for the option to refactor by extracting a method. The extracted method should look like this:

{% code-tabs %}
{% code-tabs-item title="src/app/services/todo-list.service.ts" %}
```typescript
saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Now make sure you call `saveList` from within addItem and `updateItem`.

### deleteItem

This method will remove an item from the list. We look for the item in the list, remove it, and save the changes.

{% code-tabs %}
{% code-tabs-item title="src/app/services/todo-list.service.ts" %}
```typescript
deleteItem(item: TodoItem) {
  const index = this.todoList.indexOf(item);
  this.todoList.splice(index, 1);
  this.saveList();
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

`splice(i, n)` removes `n` items starting from index `i`. In our code, we remove only one item \(that's why we use 1 as the second parameter\).

### Final result

Our TodoListService is ready with methods to get and modify the todo list. We can use these methods from the components.

{% code-tabs %}
{% code-tabs-item title="src/app/services/todo-list.service.ts" %}
```typescript
import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable()
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList = 
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }
  
  getTodoList() {
    return this.todoList;
  }

  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Summary

In this chapter we learned what local storage is and how to use it. We saw that `localStorage` is a great and a pretty straight-forward tool for developers to store data locally on the users' computers/devices. We then implemented a new service that uses `localStorage` to store data, which our `TodoListService` uses to save the todo-list items.


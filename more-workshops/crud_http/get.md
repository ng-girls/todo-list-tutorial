# \#5 GET

You've posted your first item to database. This is a great time to get the data from it!

Let's add method called `retrieveListFromDataBase` in which we will perform **GET** method.

```typescript
    this.http.get<TodoItem[]>('http://localhost:3000/items').subscribe();
```

As you've probably noticed `url` part is also needed here and we subscribed response of this call. Also we added `<TodoItem[]>` part which is telling that our response will have type `TodoItem[]`.

But before we move on, we need to make changes to the model. In the DB, each item has a unique id \(string\) and we need to add it into our model.

In `todo-item.ts`, add `_id: string;`:

```typescript
export interface TodoItem {
    _id?: string;
    title: string;
    completed?: boolean;
}
```

How can we see the data in our rendered app? 🤔

Let's start with seeing the data we receive in DevTools console. To do so, add `console.log()` inside the `subscribe`:

```typescript
  retrieveListFromDataBase() {
    this.http.get<TodoItem[]>('http://localhost:3000/items').subscribe(
      response => console.log(response)
    );
  }
```

How can we add the data to the application view?

## Interacting with server data

We will need to use libraries that allow us to work with data when that data isn't immediately available to the application. The response from the server is asynchronous, meaning some time might pass between the request and response, but the application code isn't waiting for it. Imagine our application is multi-tasking just like we do every day! We can't always wait for something to complete before starting the next task. For example, we'll start making coffee and while the coffee is brewing, we'll get our favorite coffee cup out and maybe even start preparing breakfast before the coffee is ready to drink.

In this same way, we can write code that allows us to react to data as it comes back from the server. We'll use a specialized library called **RxJS** that is already included with Angular projects. We'll use types called `Subject` and `Observable`.

**Observables** provide us with a stream of information and the library allows us to define how to react to the data when it's received. This is great for refreshing our list each time we make any changes.

**Subject** will give us a mechanism to emit new values into `Observable`. We will use this soon and explain in more detail as we go along, so for now we can focus on understanding and interacting with HTTP calls. If you're interested, you may [watch a video about this topic](https://www.youtube.com/watch?v=QHCjT3jRzB0) to get a sneak peek.

The response from the HTTP call is already an `Observable` - Angular has built in handling of reacting to streams of data. We need to `subscribe` to the response and define how we react to it.

## Working with server data

Now that you've had the opportunity to view the data returned from the DB in the DevTools console, we need a mechanism that will emit this data to the component that wants to use it. This is where `Subject` comes into play.

Let's create a new `Subject` as a property of the service class:

```typescript
  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();
```

By using `Subject`'s mechanism of emitting the next value, we can announce the response we got from the server:

```typescript
  retrieveListFromDataBase() {
    this.http.get<TodoItem[]>('http://localhost:3000/items').subscribe(
      response => this.todoListSubject.next(response)
    );
  }
```

Now that we are emitting values, how can we see them in the app? `Observable` to the rescue! Instead of sending back a static list of items, we return an `Observable` of the list to the component by converting the `Subject` into `Observable`. _\(when using localhost you used a property which was mutable, the array. each time you pushed a todo list item into the array, it mutated and that's why you saw the update in the view immediately\)_

```typescript
   getTodoList() {
    return this.todoListSubject.asObservable();
  }
```

But the component will not understand it now. We also need to change the way of we retrieve the data by the list manager.

In `list-manager.component.ts` you need to change `todoList` type into `Observable<TodoItem[]>` because the server now returns an `Observable` of type `TodoItem[]`. Since Observables are also described as streams of data, and streams are asynchronous data, we need to also change our template that displays our items. To display values from `Observable`, we use the `async` pipe.

```markup
    <div class="todo-app">
      <app-input-button-unit (submitItem)="addItem($event)"></app-input-button-unit>

      <ul *ngIf="todoList | async as todoItems">
        <li *ngFor="let todoItem of todoItems">
          <app-todo-item [item]="todoItem"
                         (remove)="removeItem($event)"
                         (update)="updateItem($event.item, $event.changes)"></app-todo-item>
        </li>
      </ul>
    </div>
```

Let's talk through the changes we made. We used the `*ngIf` directive to display values only when we have something in `todoList`. Then we added `async` pipe by putting `| async` \(`|` means `pipe` in Angular\) which marks the data as asynchronous and allows Angular to handle it correctly. We also used `as todoItems` to refer to the array inside the Observable by the name 'todoItems'.

At this point, adding items will not refresh your list automatically - that's because we haven't implemented anything that will inform our app that data has updated. There are different ways to implement this \(for example, websocket\) but to limit the scope of what we cover and to focus on HTTP we can use the methods we already have. For each action we make interacting with the server \(getting, deleting and editing list\), we will also add retrieving data upon success. We can add it where we define how we react to asynchronous data like this:

```typescript
  addItem(item: TodoItem) {
    this.http.post('http://localhost:3000/items',
      JSON.stringify({title: item.title, completed: item.completed || false}),
      {headers: this.headers}).subscribe(
      () => this.retrieveListFromDataBase()
    );
  }
```

Inside `subscribe()` we define how to react to the response. We define what happens when the call was successful, what happens if there's an error, and what happens when the call completes. In the code above, we added logic to call the method to retrieve the data from the server if the call is successful.

Now you may check if everything is working as expected.


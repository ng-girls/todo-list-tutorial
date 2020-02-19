## Getting items from database

You've posted your first item to database. This is a great time to get the data from it!

Let's add method called `retrieveListFromDataBase` in which we will perform GET method.

```js
    this.http.get<TodoItem[]>('http://localhost:3000/items').subscribe();
```

As you've probably noticed `url` part is also needed here and we subscribed response of this call. Also we added `<TodoItem[]>` part which is telling that our response will have type `TodoItem[]`.

But before we move on, we need to make changes to the model. In the DB, each item has a unique id (string) and we need to add it into our model.

In `todo-item.ts` simply add `_id: string;`:

```js
export interface TodoItem {
    _id?: string;
    title: string;
    completed?: boolean;
}
```

Now the most tricky part: how can we see the data in our rendered app?

We will setup the whole integration by using `Subject` and `Observable` - do not worry, later on we will explain it more.

For starters you may want to see in DevTools console what we actually receive.
To do this inside subscribe you may add `console.log()`:
```js
  retrieveListFromDataBase() {
    this.http.get<TodoItem[]>('http://localhost:3000/items').subscribe(
      response => console.log(response)
    );
  }
```

Now comes the time for a small explanation.

**Observables** provide us with a stream of information and with that we may define what the app needs to do when a new value is being received. This is great for refreshing our list each time we make any changes.
**Subject** will give us a mechanism to emit new values into Observable.
We will explain it again later, but for now let's stay focused on understanding http calls.
But you may also [watch video](https://www.youtube.com/watch?v=QHCjT3jRzB0) to get a sneak peak of what we are talking about.

The response from the http call is already an Observable, that's more or less why we need to subcribe to it.

Okay, so we have values sent back from the DB as you saw in the console. We need a mechanism that will emit this data to the component that wants to use it. This is where Subject will come into play.

Lets create a new Subject as property of service class:

```js
  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();

```

By using Subject mechanism of emiting next value we may now announce response we got from server:

```js
  retrieveListFromDataBase() {
    this.http.get<TodoItem[]>('http://localhost:3000/items').subscribe(
      response => this.todoListSubject.next(response)
    );
  }
```
 Cool, we are emiting values, but how can we see them in the app?
 Observable comes to rescue. 
 Instead of sending back a static list of items, we may now return to component an Observable of this list by simply converting Subject into Observable. *(when using localhost you've used a property which was mutable, each time you've pushed something to an array it was mutated and that's why you've saw the update straight away)*
 
 ```js
   getTodoList() {
    return this.todoListSubject.asObservable();
  }
 ```
But the component will not understand it now. We also need to change the way of retrieving data by list manager.

In `list-manager.component.ts` you need to change `todoList` type into `Observable<TodoItem[]>` because now server returns an Observable of type `TodoItem[]`.
Since Observables may be understood as streams, which are asynchronous, we need to also change our template that displays our items.
To display values from Observable we need to use `async` pipe.

```html
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
Use `*ngIf` directive to display values only when we have something in `todoList`, add `async` pipe by putting `| async` (`|` means `pipe` in Angular). We will also use `as todoItems` to refer to this Observable inside list of its elements.

At this point, adding items will not refresh your list automatically - that's because we haven't implemented anything that will inform our app that data has updated. You way use that a lot of things (for example, websocket) but to limit new information we will add a workaround. For each action (getting, deleting and editing list) we will also add retrieving data on success. It is simple:

```js
  addItem(item: TodoItem) {
    this.http.post('http://localhost:3000/items',
      JSON.stringify({title: item.title, completed: item.completed || false}),
      {headers: this.headers}).subscribe(
      () => this.retrieveListFromDataBase()
    );
  }
```
Inside subscribe you may define what is happening when the call was successful, if there's an error, and when the call is completed. In the code above, we added logic to retrieve the data again if the call is successful.

Now you may check if everything is working correctly.

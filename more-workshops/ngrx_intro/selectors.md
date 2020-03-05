# \#4: Selectors

Now we'll add a **selector** that allows us to display data from the store instead of the database. This allows the store to become the single source of truth for data in our application.

Take a look at the documentation and try to create selector based on information provided on [NgRx Docs](https://ngrx.io/guide/store/selectors).

⏳⏳⏳⏳⏳⏳

Does your code look something similar to this?

```typescript
export const getRootState = (state: State) => state.todoList;

export const getTodoItems = createSelector(
  getRootState,
  (state: TodoListState) => state.items
);
```

## Displaying data from store

Now that our selector is ready, let's retrieve items from the store.

One question we might ask ourselves is where to implement the code?

The `todo-list-service.ts` is a good candidate, so we'll show examples using this file 😊

To access the selector, you need to first initialize the store in constructor. Then you may use your selector by calling `select` method on store.

The recommended way to import selectors looks like this:

```typescript
import * as fromTodoListSelectors from '../store/todo-list/selectors';
```

Now add the `select` method:

```typescript
this.store.select(fromTodoListSelectors.getTodoItems)
```

It's returning an Observable with todo list items from store, so you can subscribe to it. Since it's an Observable, we'll automatically get the latest data without having to manually call it again. 😊

Now we can make the change to retrieve data from the store instead of the database:

```typescript
  retrieveListFromStore() {
    this.store.select(fromTodoListSelectors.getTodoItems).subscribe(value => this.todoListSubject.next(value));
  }
```

You may now remove the code calling MongoDB and take a moment to double check your work by verifying your app accesses the todo list inside the store. 😊

> For your next step or your homework, try adding user information related store. Good luck; you got this! 💪


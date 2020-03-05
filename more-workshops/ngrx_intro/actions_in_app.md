# \#3: Implementing actions in app

When you have basic actions and reducers set up and tested, you may start using them in your app. Based on the code responsible for dealing with data in the database, where do you think it may be the best place to dispatch actions? 🤔

We'll put our code inside `list-manager.component.ts`.

Inside the `removeItem` method, we want to dispatch `deleteTodoItem` action in addition to calling the service. To do so, we need to initialize our Store somewhere in our app. The best way is to do it in the constructor, by adding the store as a parameter:

```typescript
  constructor(
    private todoListService: TodoListService,
    private store: Store<State>
  ) {}
```

Dispatching an action is follows the pattern of calling the action name method and passing in props 😉

```typescript
store.dispatch(actionName({ props1: value1, props2: value2 }));
```

Or just

```typescript
store.dispatch(actionName());
```

if you don't provide any props in action 😊

Try updating the `removeItem` method.

⏳⏳⏳⏳⏳⏳

Are you finished?

Does it look somewhat like the example below?

```typescript
  removeItem(item) {
    this.store.dispatch(deleteTodoItem({id: item._id}));
    this.todoListService.deleteItem(item);
  }
```

Great job!

Now it's time for the `addItem` method.

Since `_id` is usually provided by MongoDB in our app, you may use an _uuid generator_ to generate id for store purposes.

We used a library called 'uuid' and imported into our code like this:

```typescript
import { v4 as uuid } from 'uuid';
...
_id: uuid(),
```

Try to dispatch proper action in `addItem` method.

⏳⏳⏳⏳⏳⏳

Does it look somewhat like the example below?

```typescript
  addItem(title: string) {
    this.store.dispatch(setNewItem({item: {_id: uuid(), title: title, completed: false}}));
    this.todoListService.addItem({title});
  }
```

Awesome! Check it out using store devtools to see how it all works together! 🤞

The last one is `updateItem` method. You're a pro now; you've got this! 💪

You may sneak a peek on [Stackblitz](https://stackblitz.com/github/pelagia123/todo-list-tutorial/tree/ngrx-store/examples/5_01-store-setup) if you get stuck, but we encourage you to try youself first and then ask a mentor for help as you won't be able to always count on a prepared solution.

Do you have other actions to dispatch or code to add based on the brainstorm? Feel free to add them now!


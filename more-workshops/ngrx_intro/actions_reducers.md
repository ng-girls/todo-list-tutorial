# \#1: Actions and reducers

To start using NgRx Store you need to firstly install it in your application. Remember that we are still working on the same todo list.

Instructions you may find on [ngrx.io](https://ngrx.io/guide/store/install)

As you may see it created new folder named `reducers` with `index.ts` file in it. In this file you will define:

* State
* reducers
* metaReducers

It also updated imports in `src/app/app.module.ts` with `StoreModule.forRoot(reducers, { metaReducers })`.

In previous step you were asked to do small brainstorming session and make notes. Based on those notes how do you thing the **state** interface will look like? 🤔 Try to think of structure of this interface accordingly to your ideas, but below you'll see what we came up with. 😉

We think that in our case there will be propose very simple state:

```typescript
export interface State {
  todoList: TodoListState,
  userInfo: UserInfoState
}
```

You may now think "wait whaaaat?! Where those other states came from? 😳 My idea is not using any other states". Well, we might have took advantage of our knowledge 😜.

Thinking triggered? Now we may start. We will get back to this interface after a while, now let's prepare the app to use the store.

> To keep app a bit more tidy in the tutorial we've also renamed the _reducers_ folder into _store_ and inside this directory we've placed another two:
>
> * todo-list
> * user-info
>
> Just to distinguish actions, reducers and effects for each part of the data separately.

## Creating reducers

In order to start creating **reducers** you need to create **actions** first. If you've chosen data structure as ours inside _todo-list_ directory create file called `todo-list.actions.ts` \(or simply `actions.ts` - folder structure will let you know which ones are those\)

## Creating actions

Inside this file \(👆\) you may now define the actions. Which are basically `const`s to which you are assigning effect of `createAction` function from **NgRx**. As first argument it takes the name of the action, second one are additional parameters \(`props`\) you may send if you want to additionally pass some data within the action.

So for example, if you want to define action for adding an item to the store it may look like this:

```typescript
export const setNewItem = createAction('[Todo list] Set new todo list item', props<{item: TodoItem}>());
```

where as `props` you are passing whole TodoItem.

Same you may do with deleting an item:

```typescript
export const deleteTodoItem = createAction('[Todo list] Delete todo item', props<{id: string}>());
```

How do you think editing an item may look? Try to implement it by yourself 😳

## Creating reducers for real

Now, since you have all actions defined we may move back to creating reducers! In the same folder as `actions.ts` create new file `reducers.ts`.

In this file you will need to create `TodoListState` interface describing structure of todo list state, some initial state and finally reducer.

Please, try to make it accordingly to description from [NgRx Docs](https://ngrx.io/guide/store/reducers).

When changing the state you will need to operate on Array - feel free to use those functions as helpers:

```typescript
function removeItemFromList(list: TodoItem[], id: string): TodoItem[] {
  return list.filter((element) => {
    return element._id !== id
  })
}

function markListElementAsCompleted(list: TodoItem[], id: string, completed: boolean): TodoItem[] {
  return list.map(value => {
    if (value._id === id) {
      return {
        ...value,
        completed: completed
      }
    } else {
      return value
    }
  })
}
```

Together with your mentor go through those functions to make sure you understant the logic in it.

Is your reducer at least similar to this one?

```typescript
const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.setNewItem, (state, {item}) => ({...state, items: state.items.concat(item)}))
);
```

Yes? Then good job!

You may see how we've defined all the reducers and actions on [Stackblitz](https://stackblitz.com/github/pelagia123/todo-list-tutorial/tree/ngrx-store/examples/5_01-store-setup). There are some additional changes, but we will go through them in the next step.

I hope you've had fun during this part 😅

Before moving forward please install [Store Devtools](https://ngrx.io/guide/store-devtools) which will allow you test your code.


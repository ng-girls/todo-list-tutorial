# \#6 DELETE and PUT

## Deleting data from the database

You've already implemented adding and getting data from database. Based on what we covered today you may now want to start deleting items. I bet you already know which method to use. 😉 To call **DELETE**, you have to specify which item you want to delete. You must choose the most unique part of the item: `_id`. The server accepts calls to DELETE an item and requires a path to `items/:id` and no body. `:id` defines name of the argument, sometimes you will have several of those. In this case we have only one.

Try to do it yourself! 💪

Does your code look like the snippet below?

```typescript
  deleteItem(item: TodoItem) {
    return this.http.delete(`http://localhost:3000/items/${item._id}`).subscribe(
      () => this.retrieveListFromDataBase()
    );
  }
```

## Editing the data

Marking an item as completed is editing the item. Try to edit the item in the database by implementing proper HTTP call. The server accepts calls to the path `items/:id`, method **PUT**, and body with adequate data.

Remember to retrieve data from database upon success.

You may see how your code should look like in [StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/2_01-adding-crud).

## Cleaning the code

Now you may clean the code:

* get rid of unused elements
* define `http://localhost:3000/` as a class property
* maybe even define server url inside `environment.ts` and `environment.prod.ts`

  Do what you think will make code cleaner, more reusable, get familiar with [**DRY**](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and [**KISS**](https://en.wikipedia.org/wiki/KISS_principle) principles.

## Homework

As you might have noticed in final code there is different button which is using [Angular Material](https://material.angular.io/). Your task is to use Angular Material elements in the app. You may change every element.

If you will have any problems, please contact your mentor 😄


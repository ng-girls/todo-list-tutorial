# \#6 DELETE and PUT

## Deleting data from database

You've already implemented adding and geting data from database. Based on knowledge you may now add deleting items. I bet you already know which method to use, but you have to remember that you have to remember to specify which item you want to delete. You must choose the most unique part of the item: `_id`. Server is waiting for these action with method DELETE, path to `items/:id` and no body. `:id` defines name of the argument, sometimes you will have several of those. In this case we have only one.

Try to do it yourself!

Does your code looks like the one below?

```javascript
  deleteItem(item: TodoItem) {
    return this.http.delete(`http://localhost:3000/items/${item._id}`).subscribe(
      () => this.retrieveListFromDataBase()
    );
  }
```

## Editing the data

Marking an item as completed is editing the item. Try to edit item in the database by implementing proper http call. Server is waiting under path `items/:id`, method PUT and body with adequate data.

Remember to retrieve data from database on success.

You may see how your code should look like in [StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/2_01-adding-crud).

## Cleaning the code

Now you may clean the code:

* get rid of unused elements
* define `http://localhost:3000/` as class property
* maybe even define server url inside `environment.ts` and `environment.prod.ts`

  Do what you think will make code cleaner, more reusable, get familiar with [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and [KISS](https://en.wikipedia.org/wiki/KISS_principle) principles.

## Homework

As you might have noticed in final code there is different button which is using [Angular Material](https://material.angular.io/). Your task is to use Angular Material elements in the app. You may change every element.

If you will have any problems please contact your mentor :\)


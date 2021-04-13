# \#16: 🎁 Add Items Using the Service

Let's improve our service by adding more abilities that will be used by our components. First - we'll implement adding an item to the list.

## Adding an item

We'll add a new method to the service, called `addItem`, like so:

{% code title="src/app/services/todo-list.service.ts" %}
```typescript
addItem(item: TodoItem): void { 
  this.todoList.push(item);
}
```
{% endcode %}

Now we can change our `list-manager` component to call the `addItem` method directly from the service:

{% code title="src/app/list-manager/list-manager.component.ts" %}
```typescript
addItem(title: string): void {
    this.todoListService.addItem({ title });
}
```
{% endcode %}

* Note that the service's method expects the whole item, while the component's method expects only the title and constructs the item. \(You may decide to let the service construct the item from the title.\)
* There may be additional logic when calling these methods, i.e. saving the changes in a database \(which we'll implement later\).
* A better way to handle data is using _immutable objects_, but that's a bigger topic than we can cover in this tutorial at the moment.

{% hint style="info" %}
💾 **Save your code to GitHub**

StackBlitz users - press **Save** in the toolbar and continue to the next section of the tutorial.

Commit all your changes by running this command in your project directory.

```text
git add -A && git commit -m "Your Message"
```

Push your changes to GitHub by running this command in your project directory.

```text
git push
```
{% endhint %}

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0_16-add-items-using-the-service)
{% endhint %}


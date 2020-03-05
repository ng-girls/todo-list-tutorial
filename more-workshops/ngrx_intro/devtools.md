# \#2: Store Devtools

Wouldn't it be nice to take a peek under the covers at your NgRx store to see what's going on?

The NgRx team made it easier for us to trace our code using a tool called NgRx Store DevTools. This tool allow you to see:

* a history of dispatched actions
* differences in state between actions
* action preview \(together with raw version as well\)
* state overview

## Installation

You may need to install an extension application for your browser.

Using Chrome or Firefox, open your application in the browser and open developer tools in the browser. You should now see a tab named **Redux** next to tabs built in to your browser's developer tools, such as **Elements**, **Console**, or **Network** tabs.

If you haven't set up the store or made an error when defining it, you will see an error message that looks something like:

> No store found. Make sure to follow the instructions.

Otherwise if you see something like the image below, you've set everything up correctly!

![](https://kuanhsuh.github.io/2017/10/07/Redux-Dev-Tools-Tips-Redux-Series-III/devtool_action.png)

## Dispatching actions

You haven't prepared any logic inside your app to actually dispatch any action. To see if your logic is working you may open **dispatcher** in devtools and dispatch any action you want.

To use the tool, define an object inside dispatcher input field and click the **dispatch** button 😊

The object structure looks like this:

```typescript
{
    type: 'ACTION NAME STRING',
    props1: value1,
    props2: value2,
    ...
}
```

So in our case of dispatching the `setNewItem` action, you might define an object like this:

```typescript
{
    type: '[Todo list] Set new todo list item',
    item: {
        _id: 'some-uuid',
        title: 'Add selectors',
        completed: false
    }
}
```

Do you see what `props1` and `props2` refer to?

Play a bit with those tools, test your actions and reducers. When you're ready move on to the next step.


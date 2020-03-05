# NgRx

Our topic today is **NgRx**, specifically one part of NgRx called **NgRx Store**.

Don't worry if you find this workshop particularly challenging. Take a deep breath and remind yourself practice makes things easier. The most important lesson to learn today is to high-level understanding of the concepts, identify differences between old and new notation \(so StackOverflow will be your friend 😂\), and setup of the basics.

## What is NgRx?

> NgRx is a framework for building reactive applications in Angular. NgRx provides state management, isolation of side effects, entity collection management, router bindings, code generation, and developer tools that enhance developers experience when building many different types of applications.

😵 That's a lot to take in!

Let's break this down smaller steps and focus on the first topic, _state management_, by utilizing the **NgRx Store**.

> NgRx Store provides reactive state management for Angular apps inspired by [Redux](https://redux.js.org/introduction/core-concepts). Unify the events in your application and derive state using RxJS.

Why is _state management_ useful?

> NgRx provides state management for creating maintainable explicit applications, by storing single state and the use of actions in order to express state changes.

😵 That's still a lot to take in! We'll walk through this concept together in a more "human friendly" way. Afterwards we encourage you to come back here and see if the official documentation is more clear.

## State management concepts

### Store

You may think of **NgRx Store** as a... Store! Or a shop! 🏬 If you own a shop, let's assume it's a boutique clothing shop, you have clothes 👚 and probably accessories as well 👛.

You keep part of the goods on display in the shop itself so customers can see it and a larger selection is available by order through a magazine.

You need to keep track of your inventory. You need to know the location of goods, what items you need to reorder, and items purchased. It would be useful to save the current state of the goods somewhere.

> Store is an observable of state and an observer of actions.

### State

State is the current condition the inventory of the shop.

Current state tells you which goods are in the shop, which items are availble via the magazine, and items sold 💸, etc. You need to manage the state as it constantly changes and track the changes so that when you close up the shop at the end of the day you have visibilty into your current inventory.

For that you'll need state management. NgRx identifies the different responsibilities associated to state management and names each set of responsibilities as **actions**, **reducers**, and **selectors**. We'll walk through each of these groups of state management responsibilities together.

### Actions

[Actions](https://ngrx.io/guide/store/actions) in NgRx describe unique events dispatched by components and services.

In your clothing store, each time you sell something you might save information about the items sold and the time of the sale. Sending information \(for example sending an email to someone who takes of your inventory\) dispatches an action.

### Reducers

After receiving the action \(the email in this case\), this person updates the state according to the information you provided. They will take current state and latest action \(the email\), and then based on the information, compute a new state which is then saved as most up-to-date, current state.

In NgRx [reducers](https://ngrx.io/guide/store/reducers) handle these state changes.

### Selectors

When you see that your shop sold almost every single dress 👗, you may want to check if you have any dresses left in the magazine. You need visibility into your current inventory and want to access specific information relative to current state in the store.

NgRx provides [selectors](https://ngrx.io/guide/store/selectors) which are functions that allow you to access to slices of store state. Like getting slice of a cake! 🍰 Or checking how many jeans 👖 you have in the magazine.

### Effects

[Effects](https://ngrx.io/guide/effects) are not one of the key concepts of NgRx but you may find it useful.

Effects are side effects, somewhat like when you take one medicine for the skin and it causes your hair to grow faster.

Back to our clothing store example, you may think of effects as something you define to always happen when you dispatch a specific action. Let's say that every time you sell a hat 👒 you need to order new one, because you purposely keep a low inventory of hats on hand so you have to restock on demand.

After selling the hat you'll dispatch the **action** `soldTheHat`. An **effect** waiting for this action triggers and makes the order to get the new hat.

Now that you have better vision of what the NgRx store is, discuss how you would apply this concept it your todo list app with your mentor and other attendees. Consider what sort of data should be stored. Consider how, when, and how many actions you would like to dispatch. How about would you use any effects? 🤔

Make notes. Based on those notes you'll implement your own **NgRx Store** in the app. In later steps we will show code examples, but use these examples as a stepping stone to build the app accordingly to your brainstorm.


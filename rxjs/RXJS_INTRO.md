# RxJS

## What is RxJS?

> RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the _Observable_, satellite types (_Observer_, _Schedulers_, _Subjects_) and operators inspired by **Array#extras** (`map`, `filter`, `reduce`, `every`, etc) to allow handling asynchronous events as collections.

On [YouTube](https://www.youtube.com/watch?v=QHCjT3jRzB0) you may find very usefull talk about RxJS. Take your time to get familiar with content in this video.

## Key concepts

### Observable

[Observable](https://rxjs-dev.firebaseapp.com/guide/observable) is an lazy Push collection of multiple values, often reffered to as a stream. You may imagine an **Observable** as a river :ocean: 

You may imagine Observable as a river. It may carry the boats :motor_boat: (events, values). It has two modes: on and off. By default Observables are off. To turn on an Observable you need to subscribe to it.
> Observable represents the idea of an invokable collection of future values or events

### Subscription
> [Subscription](https://rxjs-dev.firebaseapp.com/guide/subscription) represents the execution of an Observable, is primarly useful cancelling the execution.

On some rivers you may find drawbridges. You may think of a subscription as of raising the drawbridge :bridge_at_night:	 which is at the very beginning of your river (Observable) or lowering the drawbridge in this case will turn off the flow of boats on the river - which is equivalent to unsubscription.

To "start" the Observable you need only one subscription, but it doesn't mean you cannot subscribe multiple times.

### Observer
According to RxJS Docs (link)
> Observer is a collection of callbacks that knows how to listen to values delivered by the Observable

So basically Observer is an object with 3 possible methods: `next`, `error`, `completed` which specifies way Observable Execution can deliver in other words those methods tells Observable what to do:
- `next` defines what to do with the value emitted, it is the only on required
- `error` specifies how to behave in error cases
- `completed` defines behaviour when there are no more values to emit.

Multiple subscriptions to one Observable may now seem more reasonable - in each subscriber you nay define different things to do with emitted values.
In the analogy to the river abd drawbridges you may think of an Observer as of a person who is responsible for raising and lowering the bridge. :bridge_at_night:	

### Operators
[Operators](https://rxjs-dev.firebaseapp.com/guide/operators) are functions. Pure functions if we need to be specific. They affect the Observable itself. They do not affect values directly, even when it seems so.

Operators are the most powerful features of RxJS. There is plenty of them as for example `map`, `filter`, `tap`, `first`, `debounceTime`, `skipUntil`...
Operators allow complex asynchronous code to be easily composed in a declarative manner. It is like a function that may change the river or things that are next to it. 

For example one Operator may look like a mist that transform all boats :speedboat: into green boats. Or one operator may change the way river flows. There are plenty of options. And what is great you may chain the operators!

`pipe` Operator has the super power of chaining operators. And since each operator takes in an Observable and returns new one as the result we still have an Observable, no matter how many operators we've used!

Do you remember **Observer**? What do you think it will rely on?
All the Observables in each operator?
Initial state of our Observable?
Maybe the Observable that is the result we have after passingh through all the operators in _pipe_?
We are always subscribing to the **result** after passing **all** chained operators, so the last answer is correct one.

In next step we will show you few operators (among maaaaany of them :dizzy_face:) but for now let's move to another key concept - Subject.

### Subject

[Subject](https://rxjs-dev.firebaseapp.com/guide/subject) should be already known to you as we were using it in our app already, but a bit of clarification and explanation is never too much. 

Sooo... Subject is something like **EventEmitter**. It is the only way of multicasting a value or event to multiple Observers.
Subject is also a special type of Observable - may multicast to multiple Observers. Plain Observable has subscribed Observer which owns an independent execution of the Observable. :dizzy_face: Plain Observable can do less.

Every Subject is both an Observable and an Observer. So you may `.subscribe()` to it as well as call methods `.next()`, `.error()` and `.complete()` on it.

WIth a Subject you may creata a brand new river :ocean: and with the same Subject you may define how should behave person responsible for rising and lowering the downbridge. :bridge_at_night:	

### Schedulers

> [Schedulers](https://rxjs-dev.firebaseapp.com/guide/scheduler) are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

It controls when a subscription starts and when notifications are delivered.

* A Scheduler is a data structure. 
* A Scheduler is an execution context. 
* A Scheduler has a (virtual) clock.

___

All ideas about picturing RxJS are taken from [article](https://dev.to/laurieontech/how-i-make-sense-of-rxjs-5d3g) written by [Laurie](https://twitter.com/laurieontech).

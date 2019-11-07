# Examples of Operators

Here we will walk you through some basic operators. Each one will have link to [RxMarbles: Interactive diagrams of Rx Observables](https://rxmarbles.com/) example and from [RxJS and Reactive Programming - Animations and visual lessons](https://reactive.how/)

## map

`map` is an operator which is mapping emitted values to ones we want - it takes value, passes it through given function and returns new Observable.

> [Map on RxMarbles](https://rxmarbles.com/#map)
>
> [Map on reactive.how](https://reactive.how/map)

You may think of `map` as of a mist which each boat makes a blue boat - it is mapping boat :speedboat: to blue boat.

## filter

`filter` is an operator which emits only those values which satisfy a specified predicate.

> [filter on RxMarbles](https://rxmarbles.com/#filter)
>
> [Map vs Filter on reactive.how](https://reactive.how/filter)

This operator may be one that will allow only yellow boats to pass the bridge, or only those who has at least 3 people on board.

## merge

`merge` flattens multiple Observables together by returning mix of their values into one Observable.

> [merge on RxMarbles](https://rxmarbles.com/#merge)
>
> [merge on reactive.how](https://reactive.how/merge)

`merge` may be understood as a place where two rivers join and make one new river. Boats from both of them will flow on the new river with the order they've entered the river crossing.

## combineLatest

`combineLatest` multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.

> [combineLatest on RxMarbles](https://rxmarbles.com/#combineLatest)
>
> [combineLatest on reactive.how](https://reactive.how/combinelatest)

You may think of `combineLatest` as of gallery showing a pair of boats (from different rivers), always the latest ones that entered joined river.

## takeLast

`takeLast` emits last x values emitted by the source Observable. Which means that if you will call `takeLast(3)` it will emit last 3 values emitted by Observable. It will do so **after** Observable reaching completed state.

> [takeLast on RxMarbles](https://rxmarbles.com/#takeLast)
>
> [takeLast on reactive.how](https://reactive.how/takelast)

## take

`take` emits first x values emitted by the source Observable. Which means that if you will call `take(3)` it will emit first 3 values emitted by Observable. After that it will complete returned Observable.

> [take on RxMarbles](https://rxmarbles.com/#take)
>
> [take on reactive.how](https://reactive.how/take)

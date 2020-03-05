# \#5: Adding photos to category

Hi! Great to see you in last chapter of our tutorial! If you have kept up with me you now have photo gallery with bunch of photos and categories and you can upload your own photos to it! Sweet.

Altough in last chapter we created categories and we have filtered existing photos by categories, we didn’t say anyone to which category newly uploaded photos should go! Let’s fix it quickly, before someone notices!

Let’s say we want every new photo to go to currently active category. To make it so we will tweak Photos Service, using operator we have seen before: `withLatestFrom`. Currently Observable with uploaded photos looks like this:

```typescript
private allNewPhotos$ = this.newPhotos$.pipe(
    scan((allNewPhotos, newPhotos) => allNewPhotos.concat(newPhotos), []),
    startWith([]),
)
```

We want to combine it with `activeCategory$` from Categories Service and make sure each, new uploaded, photo gets property `categoryID` with ID of currently active category. First, let’s see how `allNewPhotos$` should look.

```typescript
private allNewPhotos$ = this.newPhotos$.pipe(
    withLatestFrom(this.categoriesService.activeCategory$),
    map(this.setCategoryID),
    scan((allNewPhotos, newPhotos) => allNewPhotos.concat(newPhotos), []),
    startWith([]),
)
```

We’re adding two things here. Using `withLatestFrom` we’re accessing value of `activeCategory$`. Later we’re using ID from, aformentioned, Observable to associate it with newly uploaded photos. Implementation of `setCategoryID` looks like this:

```typescript
setCategoryID = ([newPhotos, categoryID]): Photo[] =>
    newPhotos.map(photo => assoc("categoryID", categoryID, photo))
```

This method takes uploaded photos and categoryID and writes `categoryID` to every photo that is currently being uploaded. Have a go! Try to upload photos, change categories and make sure everything works like we want it.

## Time to say goodbye…

If you came here, and your gallery works, but you’re still hungry for knowledge, I’ve got a little treat for you. You can open StackBlitz go to Photo Component and look at a bunch of code in `ngAfterViewInit` method. It’s a sketch of a new feature: adding description to photo and saving it, for example, in Local Storage. There is "saving" indicator here. It can be seen when user who is writing description becomes idle for a bit, or leaves input. You can meditate on this code, try to have some fun with combining events, debouncing them, delaying and lot more. Dig into documentation and check what new operators mean. I’m sure Observables will reveal their beauty to you, through this piece of code.

Thanks for going through this little tutorial and let the power of RxJS be with you!

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/jonki/observable-gallery/tree/master/examples/3_05-add-photo-to-category/)
{% endhint %}


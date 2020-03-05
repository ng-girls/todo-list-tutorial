# \#1: Observable

## First Observable!

Our photo gallery looks great, but all photos are so small. Users will want to see bigger pictures. Let’s help them do so! When users click on photo we’ll create a nice overlay over our gallery and show the whole photo.

To do it we have to track which photo is currently active. How do we do it? Of course, with help of RxJS! It provides us with `BehaviorSubject` – object that holds value changing over time. Once we’ve had created BehaviorSubject that stores ID of active photo, we can display it easily. Let's add following code in `photos.service.ts`:

```typescript
noPhotoID = ""
activePhotoID$ = new BehaviorSubject(this.noPhotoID)
```

Notice the BehaviorSubject constructor takes one argument – initial value. When we start to subscribe to `activePhoto$` it will give us this value and, later, every next that comes to it. Our first value is empty string, since there’s no active photo when application starts.

Let's take a look on our `photo.component.html` file

```typescript
<img (click)="onPhotoClick(photo.id)" [src]="photo.url">
```

We already know what’s going on here. Once user clicks on a photo, we’re going to call the `onPhotoClick` method with one argument: `photo.id`. We want to change value of `activePhotoID$` every time user clicks on photo. How do we implement `onPhotoClick` to make sure it sends value to `activePhotoID$`? We can do so in `photo.component.ts` like this:

```typescript
onPhotoClick(photoID: string) {
    this.photosService.activePhotoID$.next(photoID)
}
```

**Tip** Remember to inject service in constructor.

## Creating new value from Observable

To display active photo let’s create a new Component called \(you guessed it\) `active-photo`. It will access a photo that is currently active and display it.

**Tip** If you don't remember command to generate component take a look on a previous chapter.

But, you probably thinking now, in our photos service, we only store the ID of the photo. Our Component needs entire Photo object! Let’s take our `activePhotoID$` and create new Observable out of it \(of course in `photos.service.ts` file\).

```typescript
activePhoto$: Observable<Photo> = this.activePhotoID$.pipe(
    map(photoID => this.photos.find(propEq("id", photoID)))
);
```

Remember to import `propEq` from ramda library:

```typescript
import propEq from 'ramda/es/propEq';
```

Only three lines of code and we’re done! This may look complicated, so let’s break down what happens in `activePhoto$` and walk through the steps together.

**First**: we’re accessing current active photo ID.

**Second**: we’re using `pipe` method to transform it into something new. That’s what `pipe` does. Think of it like a coffee grinder - you put coffee in and get coffee out, but shaped just a little bit differently. It takes value from Observable and pipes it through RxJS operators that create new Observables. Our first `pipe` takes photo ID and maps it to Photo object.

**Third**: we take array of photos and return one Photo whose `id` equals `photoID`. Function `propEq` says exactly that: check if property named `id` equals variable `photoID`.

Let’s break this process down even further. Let’s extract a method that takes photo ID and returns Photo. It looks like this:

```typescript
findPhotoByID = (photoID: string) =>
    this.photos.find(propEq("id", photoID));
```

We’re just finding one photo in array. Now, move it back to our `activePhoto$` Observable.

```typescript
activePhoto$: Observable<Photo> = this.activePhotoID$.pipe(
    map(this.findPhotoByID)
);
```

**Tip** Remember to define function findPhotoByID before its usage.

Take the active photo ID, pipe it through `map` operator and return new Observable that finds photo based on ID.

Go on and use `activePhoto$` Observable to display photo that user wanted to see!

## Display active photo!

It gets more and more interesting! You created `BehaviorSubject` that keeps value changing over time. You’ve used it to create new Observable! Now you get to display data from it. It surely requires a lot of work, or does it…? Let’s look at the code.

In `active-photo.component.ts` we have to inject PhotoService in component's constructor and add:

```typescript
activePhoto$: Observable<Photo> = this.photosService.activePhoto$;
```

Now we can use it in `active-photo.component.html` like here:

```markup
<div *ngIf="(activePhoto$ | async)" class="active-photo">
    <img [src]="(activePhoto$ | async)?.url">
</div>
```

At the end let's add some styles to our `active-photo` component

```css
.active-photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(50, 50, 50, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 80vw;
        max-height: 80vh;
    }
}
```

Looks great but... our component is not visible in the app! To fix it we have to add

```typescript
<app-active-photo></app-active-photo>
```

in `app.component.html`, just below the `<app-gallery>` tag.

And we have it with a couple lines of code! You assign `activePhoto$` from Photos service to Component field, so we can access `activePhoto$` value in HTML. Because we access asynchronous value that changes over time, we need to use the `async` pipe. The `async` pipe tells Angular it should subscribe to the asynchronous value and use new value every time it changes. Last part `?.url` means: check if `activePhoto$` holds a value, if it does access `url` field from it and display in HTML. Whew! We did it!

## Hiding a photo

Last thing to do is hiding the photo! It’s nice that user can see bigger photos, but refreshing application every time one wants to change photo preview would be a little… cumbersome ;\)

To hide active photo we need to put empty ID on `activePhotoID$` `BehaviorSubject`. This way Photos service will know to send our Components `undefined` value through `activePhoto$` Observable and no photo will be displayed.

Ok, first let’s add `hidePhoto` handler to `active-photo.component.html` file, like this:

```markup
<div
    *ngIf="(activePhoto$ | async)"
    class="active-photo"
    (click)="hidePhoto()"
>
    <img [src]="(activePhoto$ | async)?.url">
</div>
```

The active photo is now ready to receive user clicks. Now we go to `active-photo.component.ts` and implement our handler.

```typescript
hidePhoto() {
    this.photosService.activePhotoID$.next(this.photosService.noPhotoID);
}
```

It looks almost like the code use used in the Photo Compoment to set active Photo ID. Only difference is, this time we’re sending `noPhotoID` instead of real ID. This way no active photo is displayed! What more can we do with our gallery? Maybe… let’s try adding some photos!

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/jonki/observable-gallery/tree/master/examples/3_01-display-photos)
{% endhint %}


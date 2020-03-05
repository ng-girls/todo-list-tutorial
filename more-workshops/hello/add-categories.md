# \#4: Filtering by category

Wow! That was a nice ride! What now? Is our gallery finished? Of course not. Once you upload more and more photos you’d probably want to create some categories or tags. If we’d mix dogs memes with memories from our last pizzeria visit, the gallery would make no sense. Let’s go and add categories.

First? Maybe some Categories Component?

```markup
<div class="categories">
    <div *ngFor="let category of categoriesList$ | async"
         class="category"
         (click)="onCategoryClick(category.id)">
        {{ category.name }}
    </div>

    <input class="new-category" type="text" placeholder="new&thinsp;+"
           [(ngModel)]="newCategoryName"
           (keyup.enter)="onAddNewCategory($event.target.value)">
</div>
```

So that’s how it is. We’ve already seen some Observables and event handlers so you probably can read this code and get the general idea what’s happening. Some looping over Observable with categories. Setting active category once user clicks on it. `ngModel` on our input will help us clear it when new category is created. Let’s see `addNewCategory` handler.

```typescript
onAddNewCategory(name: string) {
    this.categoriesService.newCategory$.next(name)
    this.newCategoryName = ""
}
```

Sometimes I wish it’d be harder… Every time user press enter, send new category name to Categories Service and empty `newCategoryName`, so we won’t create the same category twice and we have nice UX. Shall we see our Categories Service?

Not to bore you, but it’s almost the same stuff we’ve done in photos service. List of categories. Stream with new categories. Creating a big snowball out of them… Yep, normal RxJS stuff. Not a lot to meditate on, maybe just elegance and usefullnes of Observables. `onCategoryClick` in Categories Component will work like `onPhotoClick` in Photo Component. Just instead setting active photo, we’ll set active category.

But fear not! We have to do a bit more. Since we have categories now, we need to categorize our photos and upload new photos to some categories! Also we’re going to have to filter photos we show in our gallery, so user knows to what category each photo belongs. You may check out Categories Service and Categories Component on Stackblitz. Now let’s do something new and filter photos in our Gallery!

## Filtering photos by Category

In Categories Service we need some initial categories with names and unique IDs \(feel free to use your own names ;\)

```typescript
const initialCategories = [
    { name: "Landscapes", id: "46004df1-876a-443c-9126-4bee714bed9e", },
    { name: "Wishlist", id: "4cc5e97c-7572-481a-969d-e92b131a2e8d", },
    { name: "Others", id: "b22a7c97-d7da-4fa7-af75-170055a9f825", },
]
```

In Photos Service we have to add `categoryID` field to our photos and put proper IDs there. This way we can easily group photos by category.

```typescript
…
{
     url: "https://66.media.tumblr.com/dff05f90167b5e50eab4df4f61a309aa/tumblr_o1ro152Q1m1rbkxlgo1_500.jpg",
     description: "",
     id: "6d3238a0-8e7b-4f58-b799-37ad6072097e",
     categoryID: "b22a7c97-d7da-4fa7-af75-170055a9f825",
}
…
```

Once we have categories and photos with category IDs, we can go to our Photos Service and add new Observable. Let’s call it `activeCategoryPhotos$`. We will base it on two existing Observables: `photos$` from Photos Service and `activeCategory$` from Category Service:

```typescript
activeCategoryPhotos$ = combineLatest(
    this.categoriesService.activeCategory$,
    this.photos$,
).pipe(
    map(([categoryID, photos]) => filter(
        propEq("categoryID", categoryID),
        photos
    ))
)
```

You know `combineLatest`, we have used it before. It listens to all given arguments and produces new value every time any of given Observables produces value. Like we did before, let’s break this part down and take `map` part away.

```typescript
filterPhotosByCategory = map(([categoryID, photos]) => filter(
    propEq("categoryID", categoryID),
    photos
))

activeCategoryPhotos$ = combineLatest(
    this.categoriesService.activeCategory$,
    this.photos$,
).pipe(this.filterPhotosByCategory)
```

`propEq` says: I take object you gave me and if property `"categoryID"` of this object equals `categoryID` value I return true. We have it. `activeCategoryPhotos$` is an Observable that filters `photos$` using `activeCategory$` from Categories Service. To use it, you have to go Gallery Component and bound it to `photosList$`, like that:

```typescript
photosList$: Observable<Photo[]> = this.photosService.activeCategoryPhotos$;
```

Now, when you change active category, list of photos should change accordingly.

## Showing active category

To make sure users know what category is active, it’d be nice to mark it visually. Let’s go to Categories Service. If we’d like to just create Observable that shows all categories, existing and new, added by user, we could have written it like that:

```typescript
categories$ = combineLatest(
    of(initialCategories), this.newCategories$
).pipe(
    map(([categories, newCategories]) => flatten([categories, newCategories])),
)
```

or

```typescript
mergeCategories = map(([categories, newCategories]) =>
                      flatten([categories, newCategories]))

categories$ = combineLatest(
    of(initialCategories), this.newCategories$
).pipe(this.mergeCategories)
```

but we want to be able to tell which category is currently active. To do it, we have to add third Observable to `combineLatest` and it’s… `activeCategory$` that keeps track of active category! Let’s add it:

```typescript
categories$ = combineLatest(
    of(initialCategories), this.newCategories$, this.activeCategory$
).pipe(this.mergeCategories)
```

Now we shall recreate `mergeCategories` so it takes new Observable into consideration.

```typescript
mergeCategories = map(([categories, newCategories, activeCategoryID]) =>
    flatten([categories, newCategories]).map(
        category => merge(category, {
            active: category.id === activeCategoryID
        })
    ))
```

Now it flattens `categories` and `newCategories` into one array, but also adds new field `active` to each of them so we can use it in HTML template to add some class, like `active-category` and mark this category with CSS. We have photos, we have categories, we have created few Observables! Time to celebrate and think what more can we do with our gallery!

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/jonki/observable-gallery/tree/master/examples/3_04-categories/)
{% endhint %}


# \#0: Init photo gallery

## Setup project

Let's start with creating new project - as you probably remember we can do it from terminal with command

```bash
ng new <app-name>
```

**Tip** This tutorial presents scss styling so choose that option during project creation.

At the begining we want to just display photos in gallery. To create it we need one service \(to manage our photos\) and two components \(`photo` for displaying separate image and `gallery` to display collection of photos\).

**Reminder**: To create component we can use command

```bash
ng g c <component-name>
```

and to create service

```bash
ng g s <service-name>
```

## Create Photo interface

Now, we have to define how our photo objects will look like - for each photo we need info about its id, url, descrption and optionally categoryID. So let's create an interface Photo by command:

```bash
ng g i photo
```

Our Photo interface should look like this:

```typescript
export interface Photo {
    url: string;
    description: string;
    id: string;
    categoryID?: string;
}
```

## Photo service

Photos service will be responsible for all actions connected with management of photos. It starts with one field: `photos` - an array with a bunch of example photos. So `photos` in Photos service has type `Photo[]`.

First we’re going to use it to display our gallery. Later, we’ll gradually add Observables and interactvity, based on this array with photos.

We need some initial photos in our gallery so just copy-paste array from snippet below in your `photo.service.ts` \(above the class body\).

```typescript
const initialPhotos: Photo[] = [
    {
        url: "https://66.media.tumblr.com/dff05f90167b5e50eab4df4f61a309aa/tumblr_o1ro152Q1m1rbkxlgo1_500.jpg",
        description: "",
        id: "6d3238a0-8e7b-4f58-b799-37ad6072097e",
    },
    {
        url: "https://66.media.tumblr.com/be45669e5825a1db9c22c730c00eb5db/tumblr_o6ckp64vBe1vnm7bio1_500.jpg",
        description: "",
        id: "eec3632f-2364-47d5-8f87-504b98c8fc83",
    },
    {
        url: "https://66.media.tumblr.com/9251ed46399400b08d15993800972c08/tumblr_pw9iqdF4Qr1tfqi0so1_500.jpg",
        description: "",
        id: "02cc506c-a6f4-47f7-856b-cceec9e54190",
    },
    {
        url: "https://66.media.tumblr.com/24afdb14e85f6d48d482ae3a6af83c57/tumblr_pxx0abif9Q1qdsqp6o1_500.jpg",
        description: "",
        id: "279dd724-29c2-4b14-aedd-3c5f3f53ab9e",
    },
    {
        url: "https://66.media.tumblr.com/00cc8515932da313bba8335cc203f8ce/tumblr_pxyqayFKUm1qdsqp6o1_500.jpg",
        description: "",
        id: "d5af369b-7723-4fc9-856c-e3c2b3cfb03b",
    },
    {
        url: "https://66.media.tumblr.com/c9a8653bf0afb576e18e6f4b4c65288b/tumblr_py46p7VQNi1qdqlnso1_500.jpg",
        description: "",
        id: "28daea7d-d615-45a0-ac0b-b0d0bfc9a046",
    },
    {
        url: "https://66.media.tumblr.com/fbf867c85348db723a08e1c29f6449fb/tumblr_pqkkz4dePA1wfvbkto1_500.jpg",
        description: "",
        id: "d7bf8d6c-9358-4a51-b5a8-5decf7ad33cc",
    }
];
```

and put it as initial value for `photos` property \(inside the PhotoService class\)

```typescript
photos: Photo[] = initialPhotos;
```

Thanks to that we have simple list of photos we can present in gallery component.

## Gallery component

Gallery Component refers to the list of photos, so we have to add corresponding `photosList` property in `gallery.component.ts` file:

```typescript
photosList: Photo[] = this.photosService.photos;
```

Don't forget to inject the service in component's constructor like here:

```typescript
constructor(private photosService: PhotosService) {}
```

Now you can display our list using `*ngFor` in `gallery.component.html` file:

```markup
<div class="photos-list">
    <div *ngFor="let photo of photosList" class="photo">
        <app-photo [photo]="photo"></app-photo>
    </div>
</div>
```

## Photo component

As you see there’s one Component left to implement: `app-photo` which displays an individual photo.

In the `photo.component.ts` declare one `Input`

```typescript
@Input() photo: Photo;
```

and use this data in HTML template

```typescript
<img (click)="onPhotoClick(photo.id)" [src]="photo.url">
```

## Add components to app view

We created a lot of code but nothing is visible in the bropwser preview! We can easily fix it just by adding gallery component in `app.component.html` file

```markup
<div class="photo-gallery-app">
    <app-gallery></app-gallery>
</div>
```

## Styling

To make our app beautiful add following code to `gallery.component.scss`

```css
.photos-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
}

.photo {
    width: 18vw;
    height: 20vw;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    margin-left: 1.7vw;
}
```

Height property to :host and .photo-gallery-app in `app.component.scss`

```css
:host, .photo-gallery-app {
    height: 100%;
}
```

and belowed snippet to `photo.component.scss`

```css
:host, img {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

:host {
    cursor: pointer;

    &, img {
        transition: all 0.2s ease-in-out;
    }

    img {
        object-fit: cover;
    }

    &:hover {
        opacity: 0.9;
        filter: drop-shadow(9px 9px 10px #333) contrast(140%);

        img {
            transform: scale(1.05);
        }
    }
}
```

Congrats! You've just prepared initial version of our gallery!


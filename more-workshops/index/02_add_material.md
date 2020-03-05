# \#2 💅Add Angular Material

Angular Material is a UI \(User Interface\) component library that can help you to style your application based on modern web design principles. The following steps show you how to get started with Angular Material.

## Add Angular Material packages

Import the Browser Animation Module into [`src/app/app.module.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L5) file as shown below.

```text
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [
    ...
    BrowserAnimationsModule,
  ],
})
```

Some features of Angular material require `HammerJS`.

Import it into [`src/main.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/main.ts#L6). This file is the entry point of our app.

```text
import 'hammerjs';
```

## Add a material theme

We will add a built-in material theme globally by including the following line in [`src/styles.scss`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L3) file.

```text
@import  "~@angular/material/prebuilt-themes/indigo-pink.css";
```

## Add a module for Angular material

We will create a new module to include all the material related components. Right click on the 📁`ng-material` folder and navigate to 'Angular Generator' and select 'Module'. Then provide the name `ng-material` for our new module.

Open `src/app/ng-material/ng-material.module.ts` and REPLACE what is there with the code in [ng-material.module.ts \(Github\)](https://github.com/ng-girls/todo-list-tutorial/blob/master/workshops/blog-editor/code/02-ng-material/ng-material.module.ts)

Import this new `NgMaterialModule` in 📝`src/app/app.module.ts` as shown below.

```text
import { NgMaterialModule } from  './ng-material/ng-material.module';

@NgModule({
  ...
  imports: [
    ...
    NgMaterialModule,
  ],
})
```


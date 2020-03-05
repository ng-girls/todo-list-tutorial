# \#4 🧭Add Navigation

## Add Navigation Bar

We will create a new navigation bar component by making a right-click on the folder 📁`components`. Navigate to 'Angular Generator' and select 'Component' and provide the name ‘nav-bar’.

Open `src/app/components/nav-bar/nav-bar.component.html` and replace what is there with the following code.

```text
<mat-toolbar class="nav-bar mat-elevation-z2"></mat-toolbar>
```

We will add the styling for nav bar 📝`src/app/components/nav-bar/nav-bar.component.scss` as shown below

```text
.nav-bar {
  background-color: #1565C0;
  color: #FFFFFF;
  position: fixed;
  top: 0;
  z-index: 99;
}
button:focus {
  outline: none;
  border: 0;
}
```

## Create the Home Page

We will create another component named HomeComponent. Let’s make a right-click on the folder 📁`components`. Navigate to 'Angular Generator', select 'Component' and provide the name ‘home’.

For now we will not add any code to `HomeComponent`. We will revisit this component in a later part of this workshop.

## Add Router module

We will add the `RouterModule` into 📝`src/app/app.module.ts` as shown below.

```text
    import { RouterModule } from '@angular/router';

    @NgModule({
      ...    
      imports: [
        ...
        RouterModule.forRoot([
          { path: '', component: HomeComponent, pathMatch: 'full' },
          { path: '**', component: HomeComponent }
        ]),
      ],
    })
```

## Update the `AppComponent`

Open 📝`src/app/app.component.html` and replace the content of the file with the following code.

```text
<app-nav-bar></app-nav-bar>
<div class="container">
    <router-outlet></router-outlet>
</div>
```

Add the following styles to 📝`src/styles.scss`:

```text
body {
    background-color: #fafafa;
}

.container {
    padding-top: 60px;
}
```


# \#1 ⚙️Configuring firebase

We will create a project on firebase and configure cloud firestore database for it. We will use this database for our angular application. The steps are shown below.

### Creating a project on firebase

To create a new project on firebase follow the steps mentioned below.

* Navigate to

  [https://console.firebase.google.com/](https://console.firebase.google.com/)

  and login using your Gmail account.

* Click on “Create a Project” button.
* Enter you project name. You can give any name of your choice. Here we

  will use the name `ngBlog`.

* Accept the terms and click on Continue.
* If asked to setup Google Analytics, select “Not right now”
* Click on “Create your project”.
* Once the project is ready click Continue.

### Add Firebase configuration to your application

* Click on the “Web” icon on the page.
* Provide a nickname for your app and click on “Register app”. 
* Copy the `firebaseConfig` object from the `<script>` tag.
* Paste  the following code into 📝`src/environments/environment.ts`

  ```text
  export const environment = {
  production: false,
  firebaseConfig : {
   apiKey: "<key>",
   authDomain: "<url>",
   databaseURL: "<url>",
   projectId: "<id>",
   storageBucket: "",
   messagingSenderId: "<id>",
   appId: "<app_id>"
  }
  };
  ```

* Similarly, paste the following code into 📝`src/environments/environment.prod.ts`

  ```text
  export const environment = {
  production: true,
  firebaseConfig : {
   apiKey: "<key>",
   authDomain: "<url>",
   databaseURL: "<url>",
   projectId: "<id>",
   storageBucket: "",
   messagingSenderId: "<id>",
   appId: "<app_id>"
  }
  };
  ```

  You can for workshop purposes these credentials:

* [Firebase Credentials](https://docs.google.com/document/d/16LAET8unKwy3kvZiCEWIj7q5IuEZokIeqby4KQt5wcQ/edit?usp=sharing)
* Click "Continue to the console" on the Firebase web page.

### Create "Cloud Firestore" database

* Navigate to the "Project Overview" page of your Firebase project. 
* Select “Database” under “Develop” menu from the list on the left.
* Click on “Create database” button. 
* Select “Start in test mode”. Click "Next". Click “Done”

  The Cloud Firestore database is now configured for your Firebase project.

## Import @angular/fire and firebase

⏰ We already installed `@angular/fire` in your stackblitz starter.

Now you simply need to import the libraries of AngularFire at the beginning of 📝 `app.module.ts` and make them available at the imports-Array as shown below.

```text
// import AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
...
imports: [
  // AngularFire & configuration
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule,
  ],
...
})
```


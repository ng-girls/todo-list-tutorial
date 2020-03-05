# \#9 🚀Deploy

under construction 🚧

## Deploy the app on Firebase Hosting

The next step is to deploy the app on firebase. We will follow the steps as shown below.

**Step 1**: Install firebase CLI tools via npm. Run the command as shown below.

```text
npm install -g firebase-tools
```

**Step 2**: Run the following command to build the app in production configuration.

```text
ng build --prod
```

**Step 3**: Open a command prompt window inside the `/blogsite/dist` folder. And run the following command to login using firebase.

```text
firebase login
```

It will open a browser window and ask you to login into Firebase. Login using your Google account. Upon successful login navigate back to your CLI.

**Step 4**: Execute the following command to initialize the app

```text
firebase init
```

This command will initialize a firebase project. You will be asked a set of questions. Answer them as shown below:

* Are you ready to proceed? – Y
* Which Firebase CLI features do you want to setup for this folder? – select Hosting
* Please select an option - use an existing project. 
* Select a default Firebase project for this directory: Select your project name from the list.
* What do you want to use as your public directory? – blogsite
* Configure as a single-page app \(rewrite all urls to /index.html\)? – y
* File blogsite/index.html already exists. Overwrite? – N

You will get a “Firebase initialization complete!” message.

**Step 4**: Deploy on Firebase. Run the following command to deploy your application on Firebase.

```text
firebase deploy
```

This command will deploy your angular application on Firebase and upon success it will give you a hosting URL. Navigate to the hosting URL to see your deployed app in action.

You can also find the hosting URL on firebase dashboard. Navigate to the "Project Overview" page of your Firebase project. Select “Hosting” under “Develop” menu from the list on the left. You can see the domain names for your web app in the panel on the right.


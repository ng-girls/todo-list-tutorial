# #1: ⌛ Installations

Bien qu'il soit possible de développer des applications Web avec un simple éditeur de texte, les outils disponibles rendent le développement plus facile et plus agréable. Nous aurons besoin d'un navigateur pour voir le résultat, de NodeJS pour exécuter des scripts sur notre ordinateur, et de NPM pour récupérer facilement des bibliothèques sur le Web. Avec NPM, nous installerons Angular CLI, qui exécutera un script avec NodeJS pour créer un projet de base pour nous, et utiliser NPM pour récupérer les bibliothèques dont nous aurons besoin pour le projet (comme Angular). Un IDE nous aidera à écrire le code et à gérer le projet.

En complément, nous recommandons Git pour gérer les versions de votre code, et GitHub pour le publier et le partager.

Jetez un coup d'œil au [tutoriel vidéo](https://www.facebook.com/719166003/videos/1048549972848310/) dans le groupe Facebook ngGirls où Shmuela montre comment vérifier et mettre à jour l'environnement de développement. (Vous devrez peut-être rejoindre le groupe pour y accéder.) Notez que cette vidéo a été enregistrée avec la version 16 d'Angular, et que les versions ultérieures ont des différences dans le contenu des fichiers créés et de l'application de base. De plus, Shmuela indique d'installer Angular CLI globalement sur l'ordinateur. Cependant, nous utiliserons `npx` pour créer le projet.

{% embed url="https://www.facebook.com/719166003/videos/1048549972848310/" %}

## Navigateur

Notre premier outil est le **navigateur**. Nous l'utiliserons pour voir le résultat de notre travail et le déboguer. Nous recommandons [Google Chrome](https://www.google.com/chrome/browser/desktop/) - il a de superbes outils de développement. [Microsoft Edge](https://www.microsoft.com/edge?WT.mc\_id=javascript-38439-shjacobs) est construit sur Chromium (le moteur open-source derrière Chrome) et a toutes les grandes fonctionnalités et les outils de développement. [Firefox](https://www.mozilla.org/en-US/firefox/new/) est également génial. Si vous n'en avez pas déjà un, cliquez simplement sur le lien correspondant et suivez les instructions pour télécharger et installer le navigateur de votre choix.

## IDE

Notre prochain outil est l'**IDE** , ou environnement de développement intégré. C'est un logiciel qui vous aide à écrire le code. Les IDE peuvent faire beaucoup de choses étonnantes, comme :

* colorer le code pour faciliter l'identification des expressions
* proposer de l'autocompletion
* aide a naviguer facilement dans les fichiers de votre projet
* et bien plus ...

Microsoft [Visual Studio Code](https://code.visualstudio.com/?WT.mc\_id=javascript-38439-shjacobs) (VS Code) est un IDE très populaire. Il est léger, extensible, open-source et **gratuit**. Vous pouvez trouver de nombreux plugins pour améliorer votre productivité ou simplement pour vous amuser, ou même écrire les vôtres.

JetBrains [Webstorm](https://www.jetbrains.com/webstorm/download/) est l'un des IDE les plus puissants du marché. Il est payant mais vous obtiendrez le premier mois gratuitement, et une licence totalement gratuite si vous êtes étudiante.

Choisissez l'IDE avec lequel vous souhaitez travailler et suivez les instructions d'installation sur son site Web.

### **Plugins**

Les plugins aident l'IDE à comprendre le code. Webstorm est livré avec les plugins nécessaires. Si vous choisissez d'utiliser VS Code, nous vous recommandons d'installer le [pack d'extension Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials\&WT.mc\_id=javascript-38439-shjacobs).

## NodeJS and NPM

**Please check the** [**Angular CLI docs**](https://angular.io/guide/setup-local#prerequisites) **for the up-to-date prerequisites (NodeJS and NPM versions)!**

Another tool which most web developers are using is **NodeJS**. Once installed, it comes with another tool called **NPM** (Node Package Manager).

NodeJS lets you run JavaScript code on your computer. It is used to run a local server which serves the project files to the browser and simulates a real running website.

NPM allows you to easily download and install different libraries from the internet and manage their versions.

**Download NodeJS** [**here**](https://nodejs.org/)**.**

If you already have NodeJS installed, make sure you check that the version matches the prerequisites by running this in your command line / terminal:

{% code title="command-line" %}
```
node -v
```
{% endcode %}

('-v' stands for 'version'.)

If it's lower than required, you need to be careful installing a new version, since you might have projects that rely on the version you have. Use Node Version Manager (NVM) to install the required version. Check this [Stack Overflow question](https://stackoverflow.com/questions/8191459/how-do-i-update-node-js) to learn how.

Once installed, you should also have NPM installed. Check its version by running:

{% code title="command-line" %}
```
npm -v
```
{% endcode %}

## Git

Git is a tool that helps you manage versions of your code and work in collaboration with team members. There is a lot to know about it, but in this tutorial we will cover only basic usage.

You can download it and follow the installation instructions [here](https://git-scm.com/) .\
When asked if you'd like to install **git bash**, say yes.

{% hint style="info" %}
We recommend installing or updating to the latest version of Git to take advantage of their security updates.
{% endhint %}

## GitHub

[GitHub](https://github.com/) is an online code repository, which integrates with Git. It allows you to publish your project (code) on the Web, copy (fork and clone) other open source projects and collaborate. You can create public and private repositories and invite collaborators. Some deployment methods use GitHub to publish your application. To be able to use GitHub during the workshop make sure you create a user on GitHub (for free, of course).

We highly recommend using GitHub to share your project with your mentor. You and your mentor will be able to review the code, comment on it, open discussions, and more.

Go to GitHub: [https://github.com/](https://github.com/). Click on **Sign up**. Fill the registration form and make sure to validate your email address. It is recommended to use two-factor authentication for increased security.

## Creating a project with Angular CLI

The [Angular CLI](https://cli.angular.io) is a powerful tool that simplifies a lot of the development process. It also installs libraries you'll use in your current and future projects.

With a relatively new feature of NPM, you don't need to install the Angular CLI on your computer to create a project. The command `npx` knows where to find the Angular-CLI package by its name `@angular/cli` . It will download the package (if you don't already have it installed) and run its command `new` .

> Even if you have Angular-CLI installed from a previous project you were working on, we'll tell npx to use the latest version. So if your installed version is an old one, you'll still get a project created with the newest version.

First, create a folder to store all your projects, for example _myProjects_, and then go into the folder, using the command line:

{% code title="command-line" %}
```
cd the-path-to-your-folder/myProjects
```
{% endcode %}

Now, create an Angular project by running:

```
npx @angular/cli@latest new todo-list
```

Angular CLI will ask a couple of questions to help create a new application. Answer the questions as shown below:

1. Would you like to add Angular routing? (y/N): **N**
2. Which stylesheet format would you like to use? (Use arrow keys): Select **SCSS**
3. Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?  (y/N): **N**

This can take a while, since many packages are being downloaded from the web and installed.

_**If, for any reason the command**** ****`npx`**** ****doesn't work, follow the**_[ _**instructions in the bottom of this page**_](./#if-npx-doesnt-work)_**, and then come back here to run your project.**_

Read more about the Angular CLI in the following section.

### Running your Project

Enter the new folder that the Angular-CLI created for this project:

{% code title="command-line" %}
```
cd todo-list
```
{% endcode %}

Once inside the folder of the application, run the application by using the following command:

{% code title="command-line" %}
```bash
ng serve -o
```
{% endcode %}

`ng` is the command that runs the local version of Angular-CLI that's installed in your project. We will use this command to create new components, build the project, and more.

The flag `-o` is a short for `--open`, which will open your browser in the right URL: [`localhost:4200`](http://localhost:4200)

You should see the page like this:

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption><p>start screen. welcome message depends on project name</p></figcaption></figure>


## Congratulations!

You have a running Angular application! **Keep the terminal where you ran the `ng serve` command open as you're working on the application.** Changes you make to the project code is immediately reflected in the web browser.\
You can open another terminal to perform tasks in parallel.

To stop the app from running, press `Ctrl+C` in the terminal, or close the terminal.

Now we're ready to start developing!

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0\_01-installations)
{% endhint %}

## 💾 Save your code to GitHub

Angular-CLI has already set up with git, included all the project files and performed the first commit. You can already start using GitHub to save your project online.

You might wonder why we're saving to GitHub now. Saving coding work in progress to an accessible code repository is a software development good practice. Doing so also allows mentors to better assist you with this step and as we work through the tutorial. We want for you to be able to continue working on the tutorial if you run out of time during the workshop.

Go to [Appendix 1: Git and GitHub](../appendix-1-git-and-github.md) for instructions to publish your code.

## Deploy your app

At this point you can already deploy your app. Meaning it will be available to everyone online! There are several companies and methods that can host your web app. Choose a method and get the instructions in[ ](../appendix-1-deploying-your-app/)[Appendix 2: Deploying your app.](../appendix-1-deploying-your-app/)

## _Run the following commands only if npx doesn't work..._

Install the Angular-CLI globally by running:

{% code title="command-line" %}
```
npm i -g @angular/cli
```
{% endcode %}

This command runs the recently installed NPM program. It knows where to find the package Angular-CLI package by its name `@angular/cli`. The `i` parameter, is a short form of `install`. The `-g` parameter, stands for the word `global` - we'd like to have the Angular-CLI globally installed on the computer, so that we could use it from any folder to create any future projects.

After the installation succeeds, assuming you're still in the folder you created for holding your projects (`myProjects`), run the Angular-CLI command `new` to create a new Angular project:

{% code title="command-line" %}
```
ng new todo-list
```
{% endcode %}

Angular-CLI will ask a couple of questions to help create a new application. Answer the questions as shown below:

1. Which stylesheet format would you like to use? (Use arrow keys): Select **SCSS**
2. Would you like to add SSR? (y/N): **N**

This can take a while, since many packages are being downloaded from the web and installed.

Now, go back to [running your project](./#running-your-project).

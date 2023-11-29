# #1: ⌛ Installations

Although it is possible to develop web applications with a simple text editor alone, the available tools make developing easier and enjoyable. We'll need a browser to see the result, NodeJS to run scripts on our computer, and NPM to easily fetch libraries from the web. With NPM we'll install the Angular CLI, which will run a script with NodeJS to create a starter project for us, and use NPM to fetch the libraries we'll need for the project (such as Angular). An IDE will help us write the code and manage the project.

In addition, we recommend Git to manage versions of your code, and GitHub to publish and share it.

Take a look at the [video tutorial](https://www.facebook.com/719166003/videos/1048549972848310/) in the ngGirls Facebook group where Shmuela shows how to check and update the development environment. (You may need to join the group to have access.)

{% embed url="https://www.facebook.com/719166003/videos/1048549972848310/" %}

{% hint style="info" %}
**Using an online editor**

If you don't have access to install tools on your computer or require the need to use an online editor, you'll use an online editor called [**StackBlitz**](https://stackblitz.com/). If you're using your computer for local development, you can skip this info panel and any future StackBlitz info panels.

Read about development tools on this page until you see the StackBlitz instruction panel so you understand the tools we are using but don't follow the instructions for installation.
{% endhint %}

## Browser

Our first tool is the **browser**. We'll use it to see the result of our work and debug it. We recommend [Google Chrome](https://www.google.com/chrome/browser/desktop/) - it has great developer tools. [Microsoft Edge](https://www.microsoft.com/edge?WT.mc\_id=javascript-38439-shjacobs) is built on top of Chromium (the open-source engine behind Chrome) and has all the great features and developer tools. [Firefox](https://www.mozilla.org/en-US/firefox/new/) is also awesome. If you don't already have one of those, just click the relevant link and follow the instructions to download and install the browser of your choice.

## IDE

Our next tool is the **IDE** , or integrated development environment. It's software that helps you write the code. IDEs can do a lot of amazing things, such as:

* highlight the code so it's easier to identify expressions
* suggest completions to what you type
* help you navigate easily through the files in your project
* and a lot more...

Microsoft [Visual Studio Code](https://code.visualstudio.com/?WT.mc\_id=javascript-38439-shjacobs) is a highly popular IDE. It's lightweight, extendable, open-source, and **free**. You can find many plugins to boost your productivity or just for fun, or even write your own.

JetBrains [Webstorm](https://www.jetbrains.com/webstorm/download/) is one of the strongest IDE's in the market. You get the first month for free, and a totally free license if you're a student.

Choose the IDE you'd like to work with and follow the installation instructions in its website.

### **Plugins**

Plugins help the IDE understand the code. Webstorm ships with the necessary plugins. If you choose to use VS Code, we recommend to install the [Angular Essentials extension pack](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials\&WT.mc\_id=javascript-38439-shjacobs)

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
npx @angular/cli@latest new todo-list --strict false
```

{% hint style="info" %}
Starting in Angular version 12, strict type checking is on by default. Enabling strict type checking is a best practice for Angular applications and helps developers catch errors earlier, but we are disabling this feature by adding the flag `--strict false` so we can learn Angular step-by-step.
{% endhint %}

Angular CLI will ask a couple of questions to help create a new application. Answer the questions as shown below:

1. Would you like to add Angular routing? (y/N): **N**
2. Which stylesheet format would you like to use? (Use arrow keys): Select **SCSS**

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

![start screen. welcome message depends on project name](../../.gitbook/assets/initial-app.png)

{% hint style="info" %}
**StackBlitz Instructions** ![](<../../.gitbook/assets/stackblitz-hint (1) (2).svg>)

Follow the instructions on the [StackBlitz instructions](stackblitz.md) page in this chapter to set up your online development environment.
{% endhint %}

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

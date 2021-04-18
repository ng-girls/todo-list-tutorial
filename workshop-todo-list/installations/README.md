# \#1: ⌛ Installations

Although it is possible to develop web applications with a simple text editor alone, the available tools make developing easier and enjoyable. We'll need a browser to see the result, NodeJS to run scripts on our computer, and NPM to easily fetch libraries from the web. With NPM we'll install the Angular CLI, which will run a script with NodeJS to create a starter project for us, and use NPM to fetch the libraries we'll need for the project \(such as Angular\). An IDE will help us write the code and manage the project.

In addition, we recommend Git to manage versions of your code, and GitHub to publish and share it.

{% hint style="info" %}
#### Using an online editor

If you don't have access to install tools on your computer or require the need to use an online editor, you'll use an online editor called [**StackBlitz**](https://stackblitz.com/). If you're using your computer for local development, you can skip this info panel and any future StackBlitz info panels.

Read about development tools on this page until you see the StackBlitz instruction panel so you understand the tools we are using but don't follow the instructions for installation.
{% endhint %}

## Browser

Our first tool is the **browser**. We'll use it to see the result of our work and debug it. We recommend [Google Chrome](https://www.google.com/chrome/browser/desktop/) - it has great developer tools. [Firefox](https://www.mozilla.org/en-US/firefox/new/) is also awesome. If you don't already have one of those, just click the relevant link and follow the instructions to download and install the browser of your choice.

## IDE

Our next tool is the **IDE** , or integrated development environment. It's software that helps you write the code. IDEs can do a lot of amazing things, such as:

* highlight the code so it's easier to identify expressions
* suggest completions to what you type
* help you navigate easily through the files in your project
* and a lot more...

JetBrains [Webstorm](https://www.jetbrains.com/webstorm/download/) is one of the strongest IDE's in the market. You get the first month for free, and a totally free license if you're a student.

Microsoft [Visual Studio Code](https://code.visualstudio.com/) is also a great choice that's gained a lot of popularity lately. It is completely free for individuals.

Choose the IDE you'd like to work with and follow the installation instructions in its website.

### **Plugins**

Plugins help the IDE understand the code. Webstorm ships with the necessary plugins. If you choose to use VS Code, we recommend to install the [Angular Essentials extension pack](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

## NodeJS and NPM

**Please check the** [**Angular CLI docs**](https://angular.io/guide/setup-local#prerequisites) **for the up-to-date prerequisites \(NodeJS and NPM versions\)!**

Another tool which most web developers are using is **NodeJS**. Once installed, it comes with another tool called **NPM** \(Node Package Manager\).

NodeJS lets you run JavaScript code on your computer. It is used to run a local server which serves the project files to the browser and simulates a real running website.

NPM allows you to easily download and install different libraries from the internet and manage their versions.

**Download NodeJS** [**here**](https://nodejs.org/en/)**.**

If you already have NodeJS installed, make sure you check that the version matches the prerequisites by running this in your command line / terminal:

{% code title="command-line" %}
```text
node -v
```
{% endcode %}

\('-v' stands for 'version'.\)

If it's lower than required, you need to be careful installing a new version, since you might have projects that rely on the version you have. Use Node Version Manager \(NVM\) to install the required version. Check this [Stack Overflow question](https://stackoverflow.com/questions/8191459/how-do-i-update-node-js) to learn how.

Once installed, you should also have NPM installed. Check its version by running:

{% code title="command-line" %}
```text
npm -v
```
{% endcode %}

## Git

Git is a tool that helps you manage versions of your code and work in collaboration with team members. There is a lot to know about it, but in this tutorial we will cover only basic usage.

You can download it and follow the installation instructions [here](https://git-scm.com/) .  
When asked if you'd like to install **git bash**, say yes.

{% hint style="info" %}
We recommend installing or updating to the latest version of Git to take advantage of their security updates.
{% endhint %}

## Creating a project with Angular CLI

The [Angular CLI](https://cli.angular.io) is a powerful tool that simplifies a lot of the development process. It also installs libraries you'll use in your current and future projects.

With a relatively new feature of NPM, you don't need to install the Angular CLI on your computer to create a project. The command `npx` knows where to find the Angular-CLI package by its name `@angular/cli` . It will download the package \(if you don't already have it installed\) and run its command `new` .

> Even if you have Angular-CLI installed from a previous project you were working on, we'll tell npx to use the latest version. So if your installed version is an old one, you'll still get a project created with the newest version.

First, create a folder to store all your projects, for example _myProjects_, and then go into the folder, using the command line:

{% code title="command-line" %}
```text
cd the-path-to-your-folder/myProjects
```
{% endcode %}

Now, create an Angular project by running:

```text
npx @angular/cli@latest new todo-list
```

Angular CLI will ask a couple of questions to help create a new application. Answer the questions as shown below:

1. Do you want to enforce stricter type checking and stricter bundle budgets in the workspace? \(y/N\): **N**
2. Would you like to add Angular routing? \(y/N\): **N** 
3. Which stylesheet format would you like to use? \(Use arrow keys\): Select **SCSS**

This can take a while, since many packages are being downloaded from the web and installed.

_**If, for any reason the command `npx` doesn't work, follow the**_[ _**instructions in the bottom of this page**_](./#if-npx-doesnt-work)_**, and then come back here to run your project.**_

Read more about the Angular CLI in the following section.

### Running your Project

Enter the new folder that the Angular-CLI created for this project:

{% code title="command-line" %}
```text
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
**StackBlitz Instructions** ![](../../.gitbook/assets/stackblitz-hint.svg)

Follow the instructions on the [StackBlitz instructions](stackblitz.md) page in this chapter to set up your online development environment.
{% endhint %}

## Congratulations!

You have a running Angular application! **Keep the terminal where you ran the `ng serve` command open as you're working on the application.** Changes you make to the project code is immediately reflected in the web browser.  
You can open another terminal to perform tasks in parallel.

To stop the app from running, press `Ctrl+C` in the terminal, or close the terminal.

Now we're ready to start developing!

{% hint style="success" %}
[See the results on StackBlitz](https://stackblitz.com/github/ng-girls/todo-list-tutorial/tree/master/examples/0_01-installations)
{% endhint %}

## GitHub

[GitHub](https://github.com/) is a code repository website, which integrates with Git. It allows you to publish your project on the Web, copy \(fork and clone\) other open source projects and collaborate. To be able to publish your project, make sure you create a user on GitHub \(for free, of course\).

### Create a new repository

Once you've signed in to GitHub, [create a new repository](https://github.com/new) to host your Angular app. \(Click on the link here, or on GitHub click on the + sign next to your avatar and select "New repository".\) **Give your repository a name.** It can be the same name as your Angular project, i.e. "todo-list". 

![Give your repository a name](../../.gitbook/assets/image%20%281%29.png)

**Select whether the repository is private or public.** If it's private, you'll be able to add collaborators who can see your code. You can change your decision later. However, a public repository may be forked \(duplicated by someone else\) and you'll have no control over the forks that were made. _This shouldn't stop you from making the repository public, as many projects are. Just make sure not to put any secret keys and codes in the project._

![Select whether the repository is private or public](../../.gitbook/assets/image%20%282%29.png)

Don't add any templates or files. **Click on the button "Create repository".**

### Upload the todo-list project to the repository

You have several options to set up the repository. You have already created the project on your computer, so the relevant option is to **push an existing repository from the command line**. Copy the commands starting with `git` \(you can click the "copy" button on the right side to copy all the commands\) and paste into the terminal that's open in your project folder. \(You don't have to paste line by line. You can copy all three lines and paste them. The commands will run one after the other, except the last one where you'll have to hit Enter.\)

#### What do these commands do?

The first command, `git remote add origin...` connects the project to the GitHub repository you have created. It configures the **remote** location of the project, so that each time you sync the code \(push changes to the remote or pull from it\) you don't need to specify the remote explicitly.

The second command, `git branch -M main` renames the default branch from `master` to `main`, since it has become the new standard to name it. 

The third command, `git push -u origin main` pushes the code from the main branch to the GitHub repository using the configuration of the `origin` as you have set in the first command. 

Now you can go back to the browser where you have created your repository and refresh it. You will see the files and directories of your project, and below the contents of the README file that was generated by the Angular-CLI. 

### Pushing changes to GitHub

Whenever you have finished a feature and the application seems to be working well, it's a good time to commit your changes locally and push them to GitHub to sync the repository. It is usually recommended to work on the code on different branches, then sync them with the main branch. However, for the simplicity of this tutorial you may work directly on the main branch.

**Add new files to git** - when you create new files, git doesn't include them automatically. You can notice that new files appear in red in the file list in the IDE. Run the command `git add .` to add all the files that were created in the project folder and subfolders. \(The dot `.` represents the current location. Alternatively, you can specify a file.\) Or, use the IDE to add the files when committing.

**Commit the changes** - this is like hitting "save" on your project, with the ability to go backward and forward between the commits. \(Yes, time traveling!!\) This is useful in many ways, one of which is when you discover a new bug and want to go back or compare to a previous version.

You can either run a commit command in the terminal and supply a commit message:

`git commit -m "your commit message where you describe what has changed"`

Or use your IDE to which supports the commit process. With the IDE you can see which files have changed, select the ones you want to commit or ignore, compare the changes with the last commit, edit the commit message, and more.

Find out how to commit \(and generally use git\) from your IDE:

* [Instructions for VS-Code](https://code.visualstudio.com/docs/editor/versioncontrol)
* [Instructions for WebStorm](https://www.jetbrains.com/help/webstorm/commit-and-push-changes.html) \(shortcut - Ctrl+K or Command+K\)

You can find instructions and conventions for writing good commit messages on the web. For example, [https://www.freecodecamp.org/news/a-beginners-guide-to-git-how-to-write-a-good-commit-message/](https://www.freecodecamp.org/news/a-beginners-guide-to-git-how-to-write-a-good-commit-message/)

**Push the changes to GitHub** - run the command `git push`. \(If you're on a new branch, the command will fail with instructions to open a branch of the same name on the remote repository. Just copy-paste the command.\) You can also use the IDE to push.

**Pull the changes** - if changes were made from a different computer \(another collaborator, service, or your other computer\) and synced to GitHub, you must pull the changes to your local repository before being able to push additional changes to the same branch \(main or any branch you're working on\). Simply run the command `git pull`. \(And hope that there aren't any conflicts to resolve and merge!\)

{% hint style="info" %}
To work on a separate branch, use the following commands:   
`git checkout -b new-branch-name` - create a new branch and switch to it  
`git checkout main` - switch back to the main branch \(use `git checkout` to switch to any existing branch\)  
After committing your changes in the branch, you can push them to GitHub and create a Pull Request. There you'll be able to review the changes, discuss them, comment directly on the code snippets, push additional changes, and finally approve the pull request and merge it to main. Then, sync your local main branch by running `git pull`.

If you're working in collaboration with other contributors, you may need to merge their work and rebase the commits.
{% endhint %}





## Deploy your app

At this point you can already deploy your app. Meaning it will be available to everyone online! There are several companies and methods that can host your web app. Choose a method and get the instructions in[  ](../appendix-1-deploying-your-app/)[Appendix 1: Deploying your app.](../appendix-1-deploying-your-app/)

## _Run the following commands only if npx doesn't work..._

Install the Angular-CLI globally by running:

{% code title="command-line" %}
```text
npm i -g @angular/cli
```
{% endcode %}

This command runs the recently installed NPM program. It knows where to find the package Angular-CLI package by its name `@angular/cli`. The `i` parameter, is a short form of `install`. The `-g` parameter, stands for the word `global` - we'd like to have the Angular-CLI globally installed on the computer, so that we could use it from any folder to create any future projects.

After the installation succeeds, assuming you're still in the folder you created for holding your projects \(`myProjects`\), run the Angular-CLI command `new` to create a new Angular project:

{% code title="command-line" %}
```text
ng new todo-list
```
{% endcode %}

Angular-CLI will ask a couple of questions to help create a new application. Answer the questions as shown below:

1. Would you like to add Angular routing? \(y/N\): **N** 
2. Which stylesheet format would you like to use? \(Use arrow keys\): Select **SCSS**

This can take a while, since many packages are being downloaded from the web and installed.

Now, go back to [running your project](./#running-your-project).


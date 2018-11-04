# \#1: ⌛ Installations

Although it is possible to develop web applications with a simple text editor alone, the available tools make developing easier and enjoyable. We'll need a browser to see the result, NodeJS to run scripts on our computer, and NPM to easily fetch libraries from the web. With NPM we'll install the Angular CLI, which will run a script with NodeJS to create a starter project for us, and use NPM to fetch the libraries we'll need for the project \(such as Angular\). An IDE will help us write the code and manage the project.

In Addition, Git is recommended to manage versions of your code, and GitHub to publish and share it.

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

Plugins help the IDE understand the code. Webstorm ships with the necessary plugins. If you choose to use VS Code, we recommend to install following Plugins for Angular:

* [Angular.ng-template](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
* [natewallace.angular2-inline](https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline)

![VS Code Plugins for Angular](https://github.com/ng-girls/todo-list-tutorial/raw/master/assets/VS-Code-Plugins.png)

alternative you can also install [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials) this will group a lot of these plugins together

## NodeJS and NPM

**Please check the** [**Angular CLI docs**](https://github.com/angular/angular-cli#prerequisites) **for the up-to-date prerequisites \(NodeJS and NPM versions\)!**

Another tool which most web developers are using is **NodeJS**. Once installed, it comes with another tool called **NPM** \(Node Package Manager\).

NodeJS lets you run JavaScript code on your computer. It is used to run a local server which serves the project files to the browser and simulates a real running website.

NPM allows you to easily download and install different libraries from the internet and manage their versions.

**Download NodeJS** [**here**](https://nodejs.org/en/)**.**

If you already have NodeJS installed, make sure you check that the version matches the prerequisites by running this in your command line / terminal:

{% code-tabs %}
{% code-tabs-item title="command-line" %}
```text
node -v
```
{% endcode-tabs-item %}
{% endcode-tabs %}

\('-v' stands for 'version'.\)

If it's lower than required, you need to be careful installing a new version, since you might have projects that rely on the version you have. Use Node Version Manager \(NVM\) to install the required version. Check this [Stack Overflow question](https://stackoverflow.com/questions/8191459/how-do-i-update-node-js) to learn how.

Once installed, you should also have NPM installed. Check its version by running:

{% code-tabs %}
{% code-tabs-item title="command-line" %}
```text
npm -v
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Git

Git is a tool that helps you manage versions of your code and work in collaboration with team members. There is a lot to know about it, but in this tutorial we will cover only basic usage.

You can download it and follow the installation instructions [here](https://git-scm.com/) .  
When asked if you'd like to install **git bash**, say yes.

## GitHub

[GitHub](https://github.com/) is a code repository website, which integrates with Git. It allows you to publish your project on the Web, copy \(fork and clone\) other open source projects and collaborate. To be able to publish your project, make sure you create a user on GitHub \(for free, of course\).

## Angular CLI

The [Angular CLI](https://github.com/angular/angular-cli) is a powerful tool that simplifies a lot of the development process. It also installs libraries you'll use in your current and future projects. Install it by running:

{% code-tabs %}
{% code-tabs-item title="command-line" %}
```text
npm i -g @angular/cli
```
{% endcode-tabs-item %}
{% endcode-tabs %}

This command runs the NPM we recently installed here - it knows where to find the package \(angular-cli\) you're looking for by the name of the package you provide. the 'i' parameter, is a short form of 'install'. the '-g' parameter, stands for the word 'global' - we'd like to have this tool globally installed on the computer, so that we could use it from any folder to create any future projects.

Read more about the Angular CLI in the following section.

### Creating a Project

First, create a folder to store all your projects, for example _myProjects_, and then go into the folder, using a terminal \(command line window\):

{% code-tabs %}
{% code-tabs-item title="command-line" %}
```text
cd the-path-to-your-folder/myProjects
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Now, create a new project, called _todo-list_ inside the projects folder, using the Angular CLI, by running the following command:

{% code-tabs %}
{% code-tabs-item title="command-line" %}
```text
ng new todo-list
```
{% endcode-tabs-item %}
{% endcode-tabs %}

This can take a while, since many packages are being downloaded from the web and installed.

Now enter the new folder that the Angular CLI created for this project:

{% code-tabs %}
{% code-tabs-item title="command-line" %}
```text
cd todo-list
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Once inside the folder of the application, run the application by using the following command:

{% code-tabs %}
{% code-tabs-item title="command-line" %}
```bash
ng serve -o
```
{% endcode-tabs-item %}
{% endcode-tabs %}

The flag `-o` is a short for `--open`, which will open your browser in the right URL: [`localhost:4200`](http://localhost:4200)

You should see the page like this:

![start screen. welcome message depends on project name](.gitbook/assets/181026-todo-list-start-screen.jpg)

## Congratulations!

You have a running Angular application! **As long as you're working on the application you should keep the terminal where you run it open.** Any change you make in the project code will be reflected immediately in the web browser.  
You can open another terminal to perform tasks in parallel.

To stop the app from running, press `Ctrl+C` in the terminal, or close the terminal.

Now we're ready to start developing!


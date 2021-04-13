# \#2 Local server

Now we will set up a service to act as the middle-woman between your ToDo List app and the database, also known as the server. We prepared the code for the server so we can dive in to connecting our ToDo List application quickly.

## Download the server code

The server code is available from GitHub. We need to download the files to a new folder in the project folder you created as part of your ToDo List app installations. You may have named your project folder _myProjects_. Open a terminal \(command line window\) and navigate to your project folder:

```text
cd the-path-to-your-folder/myProjects
```

Now we can download the server code using a Git action called **clone** which makes a copy of the code to your local machine.

Clone the [ngWorkshopsServer repository](https://github.com/pelagia123/ngWorkshopsServer) by running this in your command line / terminal:

```text
git clone https://github.com/pelagia123/ngWorkshopsServer.git
```

You'll see your command line display progress of all the files it copied on your local machine.

## Start the server

Using your terminal, navigate into the _ngWorkshopsServer_ folder that automatically created when you cloned the repository by running `cd ngWorkshopsServer`.

The server has required packages, or dependent pieces of code, it needs to run. This step is automatically taken care of for us by Angular CLI, but for the server code, we have to run this step manually. You can install packages by running this in your command line / terminal:

```text
npm install
```

We can now pass in the connection string to access the database to the server and start up the server. You will need the connection string with your password replaced for the `<password>` part.

{% hint style="warning" %}
Windows users - please use GitBash for running the command to start the server.
{% endhint %}

Start the server by running this in your command line / terminal:

```text
env CONNECTION_STRING="<connection_string_from_MongoDBAtlas_with_your_password>" node server.ts
```

Verify the server started by navigating to [http://localhost:3000/](http://localhost:3000/) in your browser. If you see "Hello from Express" then the server is running and ready to use by the ToDo List app.


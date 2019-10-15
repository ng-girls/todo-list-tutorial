# Running a local server and connecting to the database

Now we will set up a service to act as the middle-woman between your ToDo List app and the database, also known as the server. We prepared the code for the server so we can dive in to connecting our ToDo List application quickly. 

## Download the server code

The server code is available from GitHub. We need to download the files to a new folder in the project folder you created as part of your ToDo List app installations. You may have named your project folder _myProjects_. Open a terminal (command line window) and navigate to your project folder:

```
cd the-path-to-your-folder/myProjects
```

Now we can download the server code using a Git action called **clone** which makes a copy of the code to your local machine.

Clone the [ngWorkshopsServer repository](https://github.com/pelagia123/ngWorkshopsServer) by running this in your command line / terminal: 

```
git clone https://github.com/pelagia123/ngWorkshopsServer.git
```

You'll see your command line display progress of all the files it copied on your local machine.

## Start the server

Using your terminal, navigate into the _ngWorkshopsServer_ folder that automatically created when you cloned the repository by running `cd ngWorkshopsServer`.

The server has required packages, or dependent pieces of code, it needs to run. This step is automatically taken care of for us by Angular CLI, but for the server code, we have to run this step manually. You can install packages by running this in your command line / terminal:

```
npm install
```

The server requires connection to database (created in prevoius step). To confugure connection string rename `.env_default` to `.env` and provide connection string with your password replaced for the `<password>` part, inside the `.env` file. Start the server by running this in your command line / terminal:

```
npm start
```

Verify the server started by navigating to [http://localhost:3000/](http://localhost:3000/) in your browser. If you see "Hello from Express" then the server is running and ready to use by the ToDo List app.


### Troubleshooting
If you have any problems running the server make sure your `.env` file contains looks similar to following example:

```
CONNECTION_STRING="mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/admin"
```

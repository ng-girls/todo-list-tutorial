# \#1 MongoDB

MongoDB is the database we will use with the Todo List app. We will use a service that provides a cloud hosted MongoDB called **MongoDB Atlas**.

## Create an account on MongoDB Atlas and create your cluster

In MongoDB Atlas we first need to create a cluster to house the database. We [prepared a video that walks you through this process](https://www.loom.com/share/cf16ce731259472fbfb6a95bc74fc130).

We'll also summarize the main steps below: 1. Create an account on [MongoDB Atlas](https://www.mongodb.com/download-center). 1. When prompted, select the **Starter Clusters** to create a free MongoDB instance. 1. Choose all the default options on the **Create a Starter Cluster** page and select **Create Cluster**. It may take up to 15 minutes to prepare the cluster. 1. Once you see information about **Cluster0** in **SANDBOX**, your cluster is ready.

## Create your a collection and database

We [prepared a video that walks you through this process](https://www.loom.com/share/71f102fd983c4fb5845094a9f83b8e1a).

We'll also summarize the main steps below: 1. In the **Cluster0** panel, press the **COLLECTIONS** button. 1. Then select **Add my own data** when asked. 1. In the **Create Database** dialog, type "todo-list" as the **DATABASE NAME** and "todo-list-items" as the **COLLECTION NAME**. Press **Create**.

{% hint style="warning" %}
In order for the server to work without editing, you must use the names "todo-list" for the database name and "todo-list-items" for the collection name.
{% endhint %}

You created a database! You're almost there!

## Get connection string needed to connect to the database

Now that we have a database, we need the connection information for the server to communicate with the database. We will now get the connection string. We [prepared a video that walks you through this process](https://www.loom.com/share/f82d008123794262880001fedefc37a4).

We'll also summarize the main steps below: 1. Return to the **Clusters** page by selecting **Clusters** in the navigation list on the left side of the page. 1. Press the **Connect** button to bring up a dialog to Connect to Cluster0. 1. Press the green **Add Your Current IP Address** button, then press **Add IP Address** button. 1. You may need to create a MongoDB User. Follow the instructions to add a username and password and press **Create MongoDB User** button. Press the **Choose a connection method** button. 1. When prompted to choose a connection method, select **Connect Your Application**. You now see your connection string. Press the **Copy** button to save a copy to your computer's clipboard and paste it where you can edit it. 1. Replace the `<password>` part with your password for the MongoDB user.

Your connection string is ready to be used by the server.


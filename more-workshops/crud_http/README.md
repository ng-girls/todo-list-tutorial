# Second workshops - CRUD and HTTP

In the Todo List Tutorial you learned about adding, editing, and removing todo items. Let's expand on this by retrieving todo items from a server. By using a server to hold your todo list items, you power up your application to get data no matter where you are, and are no longer dependent on the local storage of your browser.

First, we'll cover a little vocabulary and background of the main components of how a web application connects to a server.

## Working with data

All data operations use the same [basic functions](https://en.m.wikipedia.org/wiki/Create,_read,_update_and_delete) - we **C**reate, **R**ead, **U**pdate, and **D**elete \(**CRUD**\) data. We used **CRUD** operations in the Todo List Tutorial using local storage when we added and deleted todo list items, but we'll replace local storage with a database.

## Data flow across the internet

**H**yper**T**ext **T**ransfer **P**rotocol \(**HTTP**\) is a standard communication pattern in computer networking. [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) is the foundation of how data flows across the internet and we use HTTP every time we use the web. We already used HTTP under the covers in the Todo List application, but now we'll use HTTP communication to connect to a server. We'll summarize the main parts of HTTP that we'll use in this section of the tutorial.

All HTTP interactions have a **request** and a **response**.

### HTTP Requests

Requests are made up of

* headers
* body \(optional\)
* path
* method

Methods define the way the request interacts with the server. The most common methods are:

* GET
* PUT
* POST
* DELETE
* OPTIONS

### HTTP Response

Responses are made up of

* headers
* body
* status

## Connecting to a server for data

Web applications usually connect to a service that acts as a middle-woman to the database, also referred to as the server. This service assists with the database interactions by being a go-between for the two different programs, your To Do List app and the database. Each part of the system has to speak the same language so that they can interact with each other, and a commonly used interaction pattern is **RE**presentational **S**tate **T**ransfer \(**REST**\). [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) is a communication layer on top of HTTP for your app to interact with the server.

Let's consider an example of how **REST** and **HTTP** relate to each other. Imagine **HTTP** is an oven used for baking cakes - in other words it's a foundation for baking yummy treats. 😋 And let's imagine a cake represents data. 🍰 **REST** is like a baking pan used to hold the cake in a shape - if a baker doesn't use a cake pan, the cake won't have shape. Imagine **REST** is a round cake pan, a shape everyone is familiar with and bakers know how to decorate. **REST** is a common "language" that round cakes have so that all bakers have standard tools to work with them and have experience working with.

**REST** itself uses **CRUD** concepts. For example:

* Create - POST
* Read - GET
* Update - PUT
* Delete - DELETE

In the next steps we'll create a database and add basic **CRUD** functionality into your code. To assist in this process, we prepared some resources, such as a server, for you to use. You are welcome to [review the source code of the server](https://github.com/pelagia123/ngWorkshopsServer) at your convenience.


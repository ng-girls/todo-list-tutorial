# Second workshops - CRUD and http

In the Todo List Tutorial you learned about adding, editing, and removing todo items. Let's expand on this by retrieving todo items from a server. By using a server to hold your todo list items, you can power your application to get data no matter where you are, and are no longer dependent on the local storage of your browser.

First, we'll cover a little vocabulary and background of the main components of how a web application connects to a server, **CRUD** and **HTTP**.

## What is CRUD?

**CRUD** is an acronym representing the names of [basic functions on storage](https://en.m.wikipedia.org/wiki/Create,_read,_update_and_delete): **C**reate, **R**ead, **U**pdate, and **D**elete. We used CRUD operations in the Todo List Tutorial using local storage, but we'll replace local storage with a database.

## What is a HTTP call?

**HTTP** is an acronym that stands for **H**yper**T**ext **T**ransfer **P**rotocol. [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) is the foundation of how data flows across the internet. We'll summarize the main parts of HTTP that we'll use in this section of the tutorial.

HTTP interactions have a **request** and a **response**.

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

## REST

Web applications usually connect to a service that acts as a middle-woman to the database, also referred as the server. This service assists with the database interactions by being a go-between for the two different programs, your To Do List app and the database, and commonly supports an interaction pattern called **REST**.

**REST** is an acronym that stands for **RE**presentational **S**tate **T**ransfer. [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) uses HTTP for your app to interact with the server and itself uses **CRUD** concepts. For example:

* Create - POST
* Read - GET
* Update - PUT
* Delete - DELETE

In the next steps we'll create database and add basic CRUD functionality into your code. To assist in this process, we prepared some resources, such as a server, for you to use. You are welcome to [review the source code of the server](https://github.com/pelagia123/ngWorkshopsServer) at your convenience.


# Bookshelf
=========

Server and app for loaning out and reserving books.

## What's working

- Categories, while all seem similar, have a dynamic trail to the NodeJS server and with a database load in different books
- Your loaned books and reserved books. These don't sync with the server and so you can keep reserving the same book.
- Login screen. Does not have a api but is setup to simulate a login experience.
- More info of the book.

## Some issues

Normally this would have been setup via Bower, NPM and Yeoman. Had some issues with internet and could not rely on git://, instead i copied components from a previous project. Hence the clutter in components.

## Running on:

- AngularJS
- Bootstrap
- NodeJs
- ExpressJs with bodyparser

- Mongoose (put in there for optional db wiring)
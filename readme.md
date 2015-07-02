
# Web From Folder

> A small node js application, that deliver html app from a local folder. It may also for the easy or Try testing
> any HTML Spnipptes be used. There are the internal directory `web`.


## Requirement

* [NodeJS](https://nodejs.org) or [IO.JS](https://iojs.org)


## Setup

    $ cd change/to/your/project/folder
    $ git clone https://github.com/blueskyfish/web-from-folder.git
    $ cd web-from-folder
    $ npm install
    $ node app.js portNumber path/for/web

## Command Line Interface

It is possible to register this application as a command line interface.

    $ cd /path/where/the/web-from-folder/is/checkout
    $ npm link


## Example

    (1) $ node app.js 4000 ~/Documents
    (2) $ node app.js ~/Documents
    (3) $ node app.js 4011

    (4) $ wff 4011 ~/Projects/testapp
    (5) $ wff 3000


1. Listen on port 4000 and the folder is ~/Documents.
2. Listen on port 3000 and the folder is ~/Documents.
3. Listen on port 4011 and the current folder
4. \* Listen on port 4011 and the folder is `~Projects/testapp`
5. \* Listen on port 3000 and the current folder.

\* if the application is installed with `npm link`!

## Parameters

* port: the port number, where the wff app is listen. The default value is `3000`
* path: the folder, which should deliver as web content. The default value is `web`.

## Next Steps

* add a index list of files for folder without html content
* write some unit tests
* resolve default javascript and css frameworks, for internal html test snipptes.

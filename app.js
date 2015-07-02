#!/usr/bin/env node

//
// Project: web-from-folder
//

'use strict';

var
  fs = require('fs'),
  path = require('path'),
  util = require('util');

var
  express = require('express'),
  strftime = require('strftime');

var
  app = express();

var
  pkg = require('./package.json'),
  args = getParams();


function getParams() {
  function num(s) {
    try {
      return parseInt(s);
    } catch (e) {
      return undefined;
    }
  }

  var
    args = Array.prototype.splice.call(process.argv, 2),
    port = num(args[0]) || 3000,
    path = !num(args[0]) ? args[0] : args[1] || process.cwd();

  //log('  port:', port);
  //log('  dir: ', path);

  return {
    port: port,
    path: path
  };
}

function log() {
  var
    args = arguments,
    data = [ '[msg]' ],
    time = strftime('%H:%M:%S');

  for (var i in args) {
    if (!args.hasOwnProperty(i)) {
      continue;
    }
    data.push(args[ i ]);
  }
  console.log('%s %s', time, data.join(' '));
}

log(pkg.name, ' version: ', pkg.version);
log('  port:', args.port);
log('  dir: ', args.path);
log('-----------------------------------------------------');
log('Setup the wff: http://localhost:' + args.port, '->', args.path);


app.use(express.static(args.path));
app.get('/*', function (req, res) {
  log('url: ', req.url);
  fs.readdir(args.path, function (err, files) {
    if (err) {
      res.send('<h1>Error</h1><p>Could not create a list of files</p>');
      return;
    }
    res.send('<h1><ul><li>' + files.join('</li><li>') + '</li></ul>');
  });
});

app.listen(args.port, function () {
  log('wff is ready on http://localhost:' + args.port, '; and delivery from ', args.path);
  log('Stop the wff with Strg + C');
});

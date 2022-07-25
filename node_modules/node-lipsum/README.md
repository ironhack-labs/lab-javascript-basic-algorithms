node-lipsum: [lipsum.com](http://lipsum.com) Service/CLI for NodeJS
===================================================================
[![Build Status](https://secure.travis-ci.org/traviskaufman/node-lipsum.png?branch=master)](https://travis-ci.org/traviskaufman/node-lipsum)

Summary
-------
node-lipsum is a NodeJS Module and Command-line Interface combo that provides a
service API for [lipsum.com](http://lipsum.com), which you may or may not know
as the go-to place to generate arbitrary dummy text whenever you need it.
Node-lipsum can be used right from the command line by invoking
`node-lipsum` (assuming you've installed it globally) or as a node module. When
used as a node module, you can also get access to it's `service` and `parser`
sub-modules, which can provide fine-grain access to lipsum.com's service.

<i>Lorem Ipsum taken from [http://www.lipsum.com](http://www.lipsum.com)
courtesy of James Wilson.</i>

Use Cases
---------
You can use node-lipsum when you need:

* Dummy Text for website mocks

* Fixtures for unit/functional tests

* Arbitary text that's meaningless

* A lame excuse to practice ancient Latin

Installation
------------
```sh
$ npm install [-g] node-lipsum # note -g is preferred if you want to use the CLI
```

Usage
-----
There are 2 different ways to use node-lipsum: via the command line, and as a
node module.

###The Command-Line Interface
####Basic Dummy Text Retrieval
As node-lipsum was built with a specific use case in mind, it is available out
of the box via the `node-lipsum` script. Provided you have installed
node-lipsum globally, simply run

    $ node-lipsum

This will return you 5 paragraphs of Latin dummy text.

####CLI Options
```sh
usage: node-lipsum [-h] [-v] [-s] [-w {paras,words,bytes}] [-a AMOUNT]

The CLI for the NodeJS Lorem Ipsum Service

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -s, --start-with-lipsum
                        Whether or not the text should start with "Lorem 
                        Ipsum dolor sit amet...".
  -w {paras,words,bytes}, --what {paras,words,bytes}
                        The type of each text structure that will be returned.
                         Choose from "paras" (paragraphs), "words", or "bytes"
  -a AMOUNT, --amount AMOUNT
                        The number of text structures that will be returned. 
                        Defaults to 5.
```

####Some Examples
```sh
# get 1 paragraph of text
$ node-lipsum -a 1

# get 25 words of text, starting with "lorem ipsum"
$ node-lipsum -s -w words -a 25

# the above can alternatively be written like so
$ node-lipsum --start-with-lipsum --what words --amount 25

# print a nice help message
$ node-lipsum -h  # or --help
```

###The NodeJS Module
Inside your .js file:

```javascript
var Lipsum = require('node-lipsum');
var fs = require('fs');
var lipsum = new Lipsum();
lipsumOpts = {
  start: 'yes',
  what: 'bytes',
  amount: 80
};
lipsum.getText(function(text) {
  fs.writeFile('dummy.txt', text, function(err) {
    if (err) { 
      console.error(err);
    } else {
      console.log("Wrote " + text.length + "characters!");
    }
  });
}, lipsumOpts);
```

Alternatively, inside your .coffee file:

```CoffeeScript
Lipsum = require "node-lipsum"
fs = require "fs"
lipsum = new Lipsum()
lipsumOpts =
  start: 'yes'
  what: 'bytes'
  amount: 80
lipsum.getText (text) ->
  fs.writeFile 'dummy.txt', text, (err) ->
    if err
      console.error err
    else
      console.log "Wrote #{text.length} characters!"
  , lipsumOpts
```

Full Dox
--------
Can be found [here](http://htmlpreview.github.com/?https://github.com/traviskaufman/node-lipsum/blob/master/docs/index.html)
or within the source code.

Development
-----------
###Installation
```sh
$ git clone https://github.com/traviskaufman/node-lipsum.git
$ cd node-lipsum/
$ npm install
```

###Linting the code
```sh
$ cake lint
```

###Compiling
```sh
$ cake compile
```

###Testing
```sh
$ cake test
```
or
```sh
$ npm test
```
They do the same thing

Issues
------
Please report them here!

License: LGPL
-------------
This program is free software: you can redistribute it and/or modify it under
the terms of the GNU Lesser General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along
with this program. If not, see <http://www.gnu.org/licenses/>.

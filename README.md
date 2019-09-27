# Wiki Reader

A small command line [REPL](https://en.wikipedia.org/wiki/Read-eval-print_loop) that accepts the following commands to read articles from wikipedia.org 

## How to run

To run the app, run the command `node index.js`

## Commands

### `READ <article>`
Prints the article text. In plain text, one paragraph at a time Press 'Enter' to go to the next paragraph of the article or Q to stop reading.

### `QUIT`
Exit the application.

### `HELP`
Print the available commands with a short description.

## Setup and Running

### `npm install`
To install all dependencies

### `node index.js`
Runs the app in in your terminal

## Dependencies

This project uses:

-   [node-fetch](https://www.npmjs.com/package/node-fetch): A light-weight module that brings window.fetch to Node.js to fetch data for Wikipedia

## License

(The MIT License)

Copyright (c) 2019 [Denzil Doyle](https://github.com/denzildoyle)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
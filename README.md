react-classic-calculator
====================

Classic iOS calculator written in [React](http://facebook.github.io/react/index.html)


## Demo & Examples

Live demo: [stevemao.github.io/react-classic-calculator](http://stevemao.github.io/react-classic-calculator/)

To run the examples locally, run:

```
npm install
gulp dev
```

Then open [localhost:8000](http://localhost:8000) in a browser. This will also watch for file changes and rebuild the examples (includes live reload).

To just build the examples without the dev server or watch tasks, instead run:

```
gulp build-examples
```


## Installation

The easiest way to use react-classic-calculator is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), etc).

You can also use the standalone build by including `dist/index.js` in your page. If you use this, make sure you have already included React and Underscore. (they must be available through a browserify-style `require()` call, standalone support is coming soon)

```
npm install react-classic-calculator --save
```


## Usage

react-classic-calculator generates an input field, wrapped in a `<div>` tag so it can detect the size of its value. Otherwise it behaves very similarly to a standard React input.


```js
var Calculator = require('react-classic-calculator');

<Calculator
	name="form-field-name"
	value={inputValue}
	onChange={function(event) {
		// event.target.value contains the new value
	}}
/>
```

## Credit

[Michael Jackson](https://twitter.com/mjackson/status/759039237412958209)

## License

(The MIT License)

Copyright (c) 2016 Steve Mao.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

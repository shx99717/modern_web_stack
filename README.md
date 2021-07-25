# Modern Web Stack

## History and context
Reference: https://www.youtube.com/watch?v=QliwSwWHJoQ&t=29s
### 1. <mark>Around year 2000</mark>
Simple HTML content + simple javascript

### 2. <mark>Solve ES5 ES6 ESX problem</mark>
Due to the evolution of Javascript world and the old browser support, the compatiblity of Javascript on browsers became a problem

e.g. We are coding in ES6 code, but the browser only support ES5 code, how can we solve this kind of problem

`Babel` is there to help, a Javascript to Javascript compiler

### 3. <mark>Solve problems that introduced by complex Javascript dependencies, and Content Rich website heavily relying on the Javascript</mark>
When a project contains a lot of javascript file, leads to problem of
* scope
* size
* readability
* maintainability

**(History) Introduction of IIFE(Immediately invoked function expressions)**
```javascript
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.
(function () {
  statements
})();

/*
 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
*/
```

IIFEs solve scoping issues for large projects; when script files are wrapped by an IIFE, you can safely concatenate or safely combine files without worrying about scope collision.

The use of IIFEs led to tools like `Make`, `Gulp`, `Grunt`, `Broccoli` or `Brunch`. These tools are known as task runners, and they concatenate all your project files together.

However, changing one file means you have to rebuild the whole thing. Concatenating makes it easier to reuse scripts across files but makes build optimizations more difficult. 

> e.g. Even if you only use a single function from lodash, you have to add the entire library and then squish it together. 


**(History) Birth of Javascript Modules thanks to the NodeJS**

webpack runs on Node.js, a JavaScript runtime that can be used in computers and servers outside a browser environment.

When Node.js was released a new era started, and it came with new challenges. Now that JavaScript is not running in a browser, how are Node applications supposed to load new chunks of code? There are no html files and script tags that can be added to it. (that is how the web pages load different chunks of Javascript, but at the backend javascript application this need to be solved differently)

`CommonJS from NodeJS` came out and introduced `require()`, which allows you to load and use a module in the current file. This solved scope issues out of the box by importing each module as it was needed.


With the introduction of `require() and NodeJS` the backend Javascript world now is happy and modular, but the frontend Javascript world is still not happy because of these problems:
* No Live bindings
* Circular references
* Synchronous module resolution
* Slow loading
* Browsers did not support modules

The introduction of `Browserify`, `RequireJS` and `SystemJS` was there to solve the above pain points in the browser, where allow us to write `CommonJS` modules that run in the browser.

### 1. Around year 2000
### 1. Around year 2000
### 1. Around year 2000
### 1. Around year 2000
# Modern Web Stack

## History and context
Reference: https://www.youtube.com/watch?v=QliwSwWHJoQ&t=29s
Reference: https://www.youtube.com/watch?v=Elpu7CIuqjY&t=520s

### 1. **Around year 2000**
Simple HTML content + simple javascript

### 2. **Solve ES5 ES6 ESX problem --- Babel**
Due to the evolution of Javascript world and the old browser support, the compatiblity of Javascript on browsers became a problem

e.g. We are coding in ES6 code, but the browser only support ES5 code, how can we solve this kind of problem

`Babel` is there to help, a Javascript to Javascript compiler

### 3. **Solve problems that introduced by complex Javascript dependencies, and Content Rich website heavily relying on the Javascript --- Webpack**
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

**(History) Offically introduction of ECMAScript Modules**
The good news for web projects(frontend project) is that modules are becoming an official feature in the ECMAScript standard. However, browser support is incomplete, therefore By using `webpack` is currently recommended approach to modulised the javascript at both frontend and backend javascript development

Also some good points about using `webpack`.
* Old school Task Runners and even `Google Closure Compiler` requires you to manually declare all dependencies upfront. While bundlers like `webpack` **automatically** builds and infer your dependency graph based on what is imported and exported. 
* It's a tool that lets you bundle your JavaScript applications (supporting both ESM and CommonJS), and it can be extended to support many different assets such as images, fonts and stylesheets.
* webpack cares about performance and load times; it's always improving or adding new features, such as async chunk loading and prefetching, to deliver the best possible experience for your project and your users.

### **4. The bundle tooling Webpack generate the bundled javascript file will have javascript compatiblity issue from point 2, as webpack does not talk to babel - Aim is to make sure webpack can communicate with all these different tools and bundle everything together correctly --- Webpack loader**
e.g. we could introduce different loaders to webpack
* Babel loader
* typescript loader
* x loader
* y loader
* z loader

### **5. Web application is becoming richer and richer in its content and form, cool frameworks like React, VueJS and Angular introduced**

### **6. People relized that we need type in javascript, this helps for compliation time check rather than run time check --- Typescript**
So we could convert the typescript to javascript by `Typescript loader`, and then convert javascript to another set of javascript by `Babel loader`, but ...
- Typescript has already supported compilation to older version of javascript, e.g. _"ES3" (default), "ES5", "ES6"/"ES2015", "ES2016", "ES2017" or "ESNext"_ where ESNext will take the latest version
- If you need some of the custom transformations that only `Babel` provides, the best build pipeline is still to pass the `TypeScript` files to the `TypeScript` compiler and then to `Babel` afterwards, otherwise seems to me `Typescript` is enough for most of the case.(But still a lot of projects use Babel for javascript transpiling, so still a good choice)

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript - typescriptlang.org.

JavaScript is a programming language that is developed by ECMA's Technical Committee 39, which is a group of people composed of many different stakeholders. TC39 is a committee hosted by ECMA: an internal standards organization. JavaScript has many different implementations by many different vendors (e.g. Google, Microsoft, Oracle, etc.). The goal of JavaScript is to be the lingua franca of the web.

TypeScript is a superset of the JavaScript language that has a single open-source compiler and is developed mainly by a single vendor: Microsoft. The goal of TypeScript is to help catch mistakes early through a type system and to make JavaScript development more efficient.

Essentially TypeScript achieves its goals in three ways:

- **Support for modern JavaScript features** - The JavaScript language (not the runtime) is standardized through the ECMAScript standards. Not all browsers and JavaScript runtimes support all features of all ECMAScript standards (see this overview). TypeScript allows for the use of many of the latest ECMAScript features and translates them to older ECMAScript targets of your choosing (see the list of compile targets under the --target compiler option). This means that you can safely use new features, like modules, lambda functions, classes, the spread operator and destructuring, while remaining backwards compatible with older browsers and JavaScript runtimes.

- **Advanced type system** - The type support is not part of the ECMAScript standard and will likely never be due to the interpreted nature instead of compiled nature of JavaScript. The type system of TypeScript is incredibly rich and includes: interfaces, enums, hybrid types, generics, union/intersection types, access modifiers and much more. The official website of TypeScript gives an overview of these features. Typescript's type system is on-par with most other typed languages and in some cases arguably more powerful.

- **Developer tooling support** - TypeScript's compiler can run as a background process to support both incremental compilation and IDE integration such that you can more easily navigate, identify problems, inspect possibilities and refactor your codebase.

### **7. Modern frontend development wants everything in one file, e.g. import scss into the javascript**

---


# More on Webpack
Unlike most bundlers out there, the motivation behind Webpack is to gather all your dependencies (not just code, but other assets as well) and generate a dependency graph.

At first, it might look strange to see a `.js` file require a stylesheet, or a stylesheet retrieving an image modified as it was a module, but these allow Webpack to understand what is included in your bundle and helps you transform and optimize them.

**The goal of Webpack is to handle all our dependencies. includes web assets like images and stylesheets etc**
```javascript
// index.js file
import helpers from '/helpers/main.js';

// Hey Webpack! I will need these styles:
import 'main.css';
```

## Entry
There are many ways to specify our ???entry point???, which will be the root of our dependencies graph.
```javascript
var baseConfig = {
  entry: './src/index.js'
};
```

## Output
The output in Webpack is an object holding the path where our bundles and assets will go, as well as the name the entries will adopt.


```javascript
var path = require('path');

var baseConfig = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'main.js',
    path: path.resolve('./build')
  }
};

// export configuration
module.exports = baseConfig;
```

## Loader
See the code
```javascript
// index.js file
import helpers from '/helpers/main.js';

// Hey Webpack! I will need these styles:
import 'main.css';
```

import a stylesheet in a javascript file, and by default bundler can be used only to handle the javascript file, but with the help of `loader`, it can handle other assets

Loaders provide an easy way to intercept our dependencies and preprocess them before they get bundled.

```javascript
var baseConfig = {
  // ...
  module: {
    rules: [
      {
        test: /* RegEx */,
        use: [
          {
            loader: /* loader name */,
            query: /* optional config object */
          }
        ] 
      }
    ]
  }
};
```
Examples:
* handle stylesheet - `css-loader`
* handle less(preprocessor) - `less-loader`
* transpiling - `babel-loader`
* images - `url-loader`, `svg-inline-loader` etc


## Plugin
Webpack contains default behaviors to bundle most type of resources. When loaders are not enough, we can use plugins to modify or add capabilities to Webpack.

### Extracting assets
For example, Webpack by default includes our styles inside our bundle, but we can alter this by introducing a plugin.
```javascript
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var lessRules = {
  use: [
    { loader: 'css-loader' },
    { loader: 'less-loader' }
  ]
};

var baseConfig = {
  // ...
  module: {
    rules: [
      // ...
      { test: /\.less$/, use: ExtractTextPlugin.extract(lessRules) }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
};
```

### Generate an `index.html` file
When building single-page applications we usually need one .html file to serve it.
The HtmlWebpackPlugin automatically creates an `index.html` file

```javascript
var HTMLWebpackPlugin = require('html-webpack-plugin');

var baseConfig = {
  // ...
  plugins: [
    new HTMLWebpackPlugin()
  ]
};
```



## Mode
Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
```javascript
// Provide the mode option in the config
module.exports = {
  mode: 'development',
};

// Pass as CLI mode = [development|production|none]
webpack --mode=development

```
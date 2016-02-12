# grunt-js-render

> Plugin to embed JSRender templates in JS files

[![Circle CI](https://circleci.com/gh/alchemy-fr/grunt-js-render.svg?style=svg)](https://circleci.com/gh/alchemy-fr/grunt-js-render)
[![Build Status](https://travis-ci.org/alchemy-fr/grunt-js-render.svg?branch=master)](https://travis-ci.org/alchemy-fr/grunt-js-render)

## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-js-render --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-js-render');
```

## The "js_render" task

### Overview
In your project's Gruntfile, add a section named `js_render` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  js_render: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  js_render: {
    options: {},
    files: {
      'dest/templates.js': ['templates/**.html', 'src/templates'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

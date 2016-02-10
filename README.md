# grunt-js-render

Grunt plugin to automatically embed [js-render](https://github.com/BorisMoore/jsrender) templates in script tags.

This plugin is heavily inspired by [grunt-angular-templates](https://github.com/ericclemmons/grunt-angular-templates)

## Installation

Install the plugin

```
npm install --save-dev grunt-js-render
```

Load the plugin in your `Gruntfile`:

```
grunt.loadNpmTasks('grunt-js-render');
```

## Examples

```
jsrender: {
    app: {
        cwd: 'path/to/workdir',
        src: 'templates/**.html',
        dest: 'build/app.templates.js'
    }
}
```

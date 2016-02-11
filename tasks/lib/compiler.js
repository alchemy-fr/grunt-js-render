'use strict';

var minify = require('html-minifier').minify;

var Compiler = function (grunt, options) {
    var that = this;

    this.mapPath = function (path) {
        return path.replace(/\//g, '_').replace('.html', '');
    }

    this.minify = function (content) {
        return minify(content, {
            collapseWhitespace: true
        }).replace(/"/g, '\\"');
    };

    this.registerTemplate = function (templateId, template) {
        return '$.templates("' + templateId + '", "' + template + '")';
    };

    this.compile = function (file) {
        return that.registerTemplate(that.mapPath(file), that.minify(grunt.file.read(file)));
    };

    return this;
};

module.exports = Compiler;

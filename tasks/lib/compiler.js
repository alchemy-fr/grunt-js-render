'use strict';

var minify = require('html-minifier').minify;

var Compiler = function (grunt, options) {
    var that = this;

    this.minify = function (content) {
        return minify(content, {
            collapseWhitespace: true
        });
    };

    this.wrap = function (content) {
        return '$.templates("template", "' + content + '")';
    };

    this.compile = function (file) {
        return that.wrap(that.minify(grunt.file.read(file)));
    };

    return this;
};

module.exports = Compiler;

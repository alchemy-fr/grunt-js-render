'use strict';

var minify = require('html-minifier').minify;

var Compiler = function (grunt, options) {
    var that = this;
    var buffer = [];

    this.mapPath = function (path) {
        return path; //.replace(/\//g, '_').replace('.html', '');
    };

    this.minify = function (content) {
        return minify(content, {
            collapseWhitespace: true
        }).replace(/"/g, '\\"');
    };

    this.registerTemplate = function (templateId, template) {
        return '    jQuery.templates("' + templateId + '", "' + template + '")';
    };

    this.compile = function (file) {
        buffer.push(that.registerTemplate(that.mapPath(file), that.minify(grunt.file.read(file))));
    };

    this.getCompiledFile = function () {
        return [
            '(function (jQuery) {',
            '    \'use strict\';',
            buffer.join(';\n').concat(';'),
            '}($));'
        ].join('\n');
    };

    return this;
};

module.exports = Compiler;

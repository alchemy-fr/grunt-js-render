'use strict';

var minify = require('html-minifier').minify;

var Compiler = function (grunt, options) {
    var that = this;
    var buffer = [];

    this.mapPath = function (path) {
        if (options.cwd) {
            return options.cwd.replace(/\/$/, '').concat('/').concat(path);
        }

        return path;
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
        buffer.push(that.registerTemplate(file, that.minify(grunt.file.read(that.mapPath(file)))));
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

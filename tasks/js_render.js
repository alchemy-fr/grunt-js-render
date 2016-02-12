/*
 * grunt-js-render
 * https://github.com/alchemy-fr/grunt-js-render
 *
 * Copyright (c) 2016 Alchemy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var Compiler = require('./lib/compiler.js');

    function filter(path) {
        if (!grunt.file.exists(path)) {
            grunt.log.warn('Source file "' + path + '" not found.');
            return false;
        } else {
            return true;
        }
    }

    function join(options) {
        return grunt.util.normalizelf(options.separator + '\n');
    }

    grunt.registerMultiTask('js_render', 'Plugin to embed JSRender templates in JS files', function () {
        var options = this.options({
                cwd: false,
                separator: ';',
                preserveUrls: false
            });

        this.files.forEach(function (f) {
            var compiler = new Compiler(grunt, options);

            grunt.file
                .expand({ cwd: options.cwd ? options.cwd : "" }, f.orig.src)
                .map(compiler.compile);

            grunt.file.write(
                f.dest,
                compiler.getCompiledFile()
            );

            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });
};

/*
 * grunt-js-render
 * https://github.com/alchemy-fr/grunt-js-render
 *
 * Copyright (c) 2016 Alchemy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        js_render: {
            default_options: {
                files: {
                    'tmp/default_options.js': ['test/fixtures/template.html']
                }
            },
            custom_base: {
                options: {
                    cwd: 'test/fixtures'
                },
                files: {
                    'tmp/custom_base.js': ['template.html']
                }
            },
            multiple_sources: {
                files: {
                    'tmp/multiple_sources.js': [
                        'test/fixtures/glob/*.html'
                    ]
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'js_render', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};

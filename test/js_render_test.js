'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.js_render = {
    setUp: function (done) {
        done();
    },
    default_options: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/default_options.js');
        var expected = grunt.file.read('test/expected/default_options');

        test.equal(actual.trim(), expected.trim(), 'Template should be minified and registered as named templates.');
        test.done();
    },
    multiple_sources: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/default_options.js');
        var expected = grunt.file.read('test/expected/default_options');

        test.equal(actual.trim(), expected.trim(), 'Multiple templates should be compiled and appended to the same file.');
        test.done();
    },
    custom_base: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/custom_base.js');
        var expected = grunt.file.read('test/expected/custom_base');

        test.equal(actual.trim(), expected.trim(), 'Template paths should be relative to defined cwd.');
        test.done();
    }
};

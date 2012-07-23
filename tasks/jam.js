/*
 * grunt-jam
 * https://github.com/shama/grunt-jam
 *
 * Copyright (c) 2012 Kyle Robinson Young
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  var jam = require('jamjs');

  // TODO: ditch this when grunt v0.4 is released
  grunt.util = grunt.util || grunt.utils;

  var _ = grunt.util._;

  grunt.registerMultiTask('jam', 'compile your jam dependencies', function() {
    var files = grunt.file.expandFiles(this.file.src || []);
    var options = this.data.options || {};
    var done = this.async();
    options.output = this.file.dest;

    if (files.length > 0) {
      options.includes = files;
    }

    grunt.log.writeln('compiling '.cyan + options.output);

    grunt.helper('jam', options, function afterJamHelper(err) {
      if (err) {
        grunt.log.fail(err.message);
      }
      done();
    });
  });

  grunt.registerHelper('jam', function(options, done) {
    options = _.defaults(options || {}, {
      output: '',
      pkgdir: './jam',
      includes: {},
      wrap: false,
      almond: false,
      verbose: false,
      nominify: false,
      nolicense: false
    });

    jam.compile({}, options, function afterJamCompile(err) {
      if (err) {done(err);}
      done(null);
    });
  });

};

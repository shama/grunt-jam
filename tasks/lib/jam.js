/*
 * grunt-jam
 * https://github.com/shama/grunt-jam
 *
 * Copyright (c) 2012 Kyle Robinson Young
 * Licensed under the MIT license.
 */

exports.init = function(grunt) {
  'use strict';

  var exports = {};

  var jam = require('jamjs');
  var jamrc = require('jamjs/lib/jamrc');

  // TODO: ditch this when grunt v0.4 is released
  grunt.util = grunt.util || grunt.utils;

  // Compile jamjs
  exports.compile = function(options, done) {
    // Default options
    options = grunt.util._.defaults(options || {}, {
      output: '',
      pkgdir: 'jam',
      includes: {},
      wrap: false,
      almond: false,
      verbose: false,
      nominify: false,
      nolicense: false,
      cwd: process.cwd()
    });

    grunt.util.async.series([function(next) {
      // Merge config from .jamrc file if exists
      jamrc.loadProjectRC(jamrc.DEFAULTS, process.cwd(), function(err, opts) {
        options = grunt.util._.defaults(options, opts);
        next();
      });
    }, function(next) {
      // Rename alternative package dir to pkgdir
      if (options.packageDir) { options.pkgdir = options.packageDir; }
      if (options.package_dir) { options.pkgdir = options.package_dir; }
      // Compile with jam
      jam.compile(options, function afterJamCompile(err) {
        if (err) { next(err); }
        next(null);
      });
    }], done);
  };

  return exports;
};
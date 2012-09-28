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

  // TODO: ditch this when grunt v0.4 is released
  grunt.util = grunt.util || grunt.utils;

  // Compile jamjs
  exports.compile = function(options, done) {
    if (!options) { options = {}; }
    if (options.packageDir) {
      options.pkgdir = options.packageDir;
    }
    if (options.package_dir) {
      options.pkgdir = options.package_dir;
    }
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

    jam.compile(options, function afterJamCompile(err) {
      if (err) {
        done(err);
      }
      done(null);
    });
  };

  return exports;
};
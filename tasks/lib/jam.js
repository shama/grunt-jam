/*
 * grunt-jam
 * https://github.com/shama/grunt-jam
 *
 * Copyright (c) 2013 Kyle Robinson Young
 * Licensed under the MIT license.
 */

'use strict';

var grunt = require('grunt');
var jam = require('jamjs');
var jamrc = require('jamjs/lib/jamrc');

var thisjam = module.exports = {};

// Compile jamjs
thisjam.compile = function(options, done) {
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
    if (typeof options.packageDir === 'string') {
      options.pkgdir = options.packageDir;
    } else if (typeof options.package_dir === 'string') {
      options.pkgdir = options.package_dir;
    }
    // Compile with jam
    jam.compile(options, function afterJamCompile(err) {
      if (err) { next(err); }
      next(null);
    });
  }], done);
};

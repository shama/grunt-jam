/*
 * grunt-jam
 * https://github.com/shama/grunt-jam
 *
 * Copyright (c) 2012 Kyle Robinson Young
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  var jam = require('./lib/jam').init(grunt);
  var path = require('path');

  // TODO: ditch this when grunt v0.4 is released
  grunt.util = grunt.util || grunt.utils;

  grunt.registerMultiTask('jam', 'compile your jam dependencies', function() {
    var helpers = require('grunt-lib-contrib').init(grunt);
    var options = helpers.options(this);

    grunt.verbose.writeflags(options, 'Options');

    // TODO: ditch this when grunt v0.4 is released
    this.files = this.files || helpers.normalizeMultiTaskFiles(this.data, this.target);

    var done = this.async();

    grunt.util.async.forEachSeries(this.files, function(file, next) {
      options.output = path.normalize(file.dest);

      file.src = file.src || [];
      if (typeof file.src === 'string') {
        file.src = [file.src];
      }

      var srcFiles = grunt.file.expandFiles(file.src);
      if (srcFiles.length > 0) {
        options.includes = srcFiles;
      }

      grunt.log.writeln('compiling '.cyan + options.output);

      jam.compile(options, function afterJamHelper(err) {
        if (err) {
          grunt.log.fail(err.message);
        }
        next();
      });

    }, done);

  });

};

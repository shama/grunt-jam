/*
 * grunt-jam
 * https://github.com/shama/grunt-jam
 *
 * Copyright (c) 2012 Kyle Robinson Young
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  var jam = require('./lib/jam');
  var path = require('path');

  grunt.registerMultiTask('jam', 'compile your jam dependencies', function() {
    var options = this.options();
    grunt.verbose.writeflags(options, 'Options');
    var done = this.async();
    grunt.util.async.forEachSeries(this.files, function asyncForEachSeries(file, next) {
      options.output = path.normalize(file.dest);
      var srcFiles = grunt.file.expand(file.src);
      if (srcFiles.length > 0) {
        options.includes = srcFiles;
      }
      grunt.log.writeln('compiling '.cyan + options.output);
      jam.compile(options, function jamCompile(err) {
        if (err) { grunt.log.fail(err.message); }
        next();
      });
    }, done);
  });
};

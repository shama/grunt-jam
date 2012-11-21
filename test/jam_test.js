'use strict';

var grunt = require('grunt');
var path = require('path');
var rimraf = require('rimraf');
var jam = require('../tasks/lib/jam').init(grunt);

exports.jam = {
  tearDown: function(done) {
    rimraf.sync(path.join('test', 'output'));
    done();
  },
  'has compiled jquery and fixtures/includetest.js': function(test) {
    test.expect(2);
    var result = grunt.file.read(path.join('test', 'output', 'grunt-jam.js'));
    test.ok((result.indexOf('jquery') !== -1), 'jquery was not found');
    test.ok((result.indexOf('grunt-jam can you find me?') !== -1), 'includetest was not found');
    test.done();
  },
  'jam helper will compile': function(test) {
    test.expect(1);
    var opts = {
      output: path.join('test', 'output', 'testing.js')
    };
    jam.compile(opts, function(err) {
      if (err) {throw err;}
      var result = grunt.file.read(path.join('test', 'output', 'testing.js'));
      test.ok((result.indexOf('jquery.com') !== -1));
      test.done();
    });
  }
};

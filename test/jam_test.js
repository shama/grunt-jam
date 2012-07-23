var grunt = require('grunt');
var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');

// node v0.8/6 compat
var existsSync = fs.existsSync || path.existsSync;

exports['jam'] = {
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
    grunt.helper('jam', opts, function(err) {
      if (err) {throw err;}
      var result = grunt.file.read(path.join('test', 'output', 'testing.js'));
      test.ok((result.indexOf('http://jquery.com/') !== -1));
      test.done();
    });
  }
};

module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: '<json:package.json>',
    jam: {
      dist: {
        src: ['test/fixtures/**/*.js'],
        dest: 'test/output/<%= pkg.name %>.js'
      }
    },
    test: {
      files: ['test/*.js']
    },
    lint: {
      files: ['grunt.js', 'tasks/*.js', 'test/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    }
  });
  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'jam lint test');
};

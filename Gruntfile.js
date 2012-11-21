module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jam: {
      dist: {
        src: ['test/fixtures/**/*.js'],
        dest: 'test/output/<%= pkg.name %>.js'
      }
    },
    nodeunit: {
      files: ['test/*.js']
    },
    jshint: {
      files: ['Gruntfile.js', 'tasks/*.js', 'test/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      files: '<%= jshint.files %>',
      tasks: ['default']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['jam', 'jshint', 'nodeunit']);
};

# grunt-jam

A Grunt task for compiling [Jam packages](http://jamjs.org).

## Getting Started

Be sure you have Jam installed with `npm install -g jamjs`.

Install this grunt plugin next to your project's
[grunt.js gruntfile][getting_started] with: `npm install grunt-jam`.

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-jam');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation

Add the task to your config and specify the destination for the compiled file:

```javascript
grunt.initConfig({
  jam: {
    dist: {
      dest: 'assets/js/compiled.js'
    }
  }
});
```

If you would like to include additional files specify `src` files:

```javascript
grunt.initConfig({
  jam: {
    dist: {
      src: ['assets/js/src/**/*.js', 'someother/file.js'],
      dest: 'assets/js/compiled.js'
    }
  }
});
```

All the compile options for jam are available. Set them with the `options` key
like such:

```javascript
grunt.initConfig({
  jam: {
    dist: {
      dest: 'assets/js/compiled.js',
      options: {
        verbose: true,
        nominify: true,
        wrap: true
      }
    }
  }
});
```

## Contributing

Please open an issue or send a pull request. Run `npm test` to test. Thanks!

## Release History

* 0.1.0 Package up and publish jam task

## License

Copyright (c) 2012 Kyle Robinson Young
Licensed under the MIT license.

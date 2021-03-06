# grunt-jam [![Build Status](https://secure.travis-ci.org/shama/grunt-jam.png?branch=master)](http://travis-ci.org/shama/grunt-jam)

A Grunt task for compiling [Jam packages](http://jamjs.org).

## Getting Started

Be sure you have Jam installed with `npm install -g jamjs`.

Install this grunt plugin next to your project's
[Gruntfile.js][getting_started] with: `npm install grunt-jam`.

Then add this line to your project's `Gruntfile.js`:

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

### Configuring JamJS into another folder besides `./jam`
The best way, imo, is to create a `.jamrc` file and put
`exports.package_dir = 'js';` into it. Both JamJS and grunt-jam will read that
file.

If you rather configure another dir within your `Gruntfile.js` you can do so
within the options:

```javascript
grunt.initConfig({
  jam: {
    dist: {
      dest: 'dist/compiled.js',
      options: {
        pkgdir: 'js'
      }
    }
  }
});
```

*There are two alternate options for the package dir: `packageDir` and
`package_dir`. I recommend always using `pkgdir` as the other two are for
backwards compatibility.*

## Contributing

Please open an issue or send a pull request. Run `npm test` to test. Thanks!

## Release History

* 0.4.1 Fix for configs without src.
* 0.4.0 Grunt v0.4 Support.
* 0.3.4 Fix issue with `packageDir` option.
* 0.3.3 Update for latest Grunt v0.4
* 0.3.2 Fix `grunt-lib-contrib` module name.
* 0.3.1 Enable reading .jamrc files for settings. Allow additional `src` to be blank.
* 0.3.0 Compatibility with JamJS v0.2.8. Refactor for migration to Grunt 0.4
* 0.2.1 Better defaults for pkgDir
* 0.2.0 Update for JamJS 2
* 0.1.1 Remove grunt as dep
* 0.1.0 Package up and publish jam task

## License

Copyright (c) 2012 Kyle Robinson Young
Licensed under the MIT license.

# grunt-buble

> the blazing fast, batteries-included ES2015 compiler [Bublé](https://babeljs.io)


## Install

```
$ npm install --save-dev grunt-buble
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	buble: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
				'dist/app.js': 'src/app.js'
			}
		}
	}
});

grunt.registerTask('default', ['buble']);
```


## Options

See the Bublé [options](https://buble.surge.sh/guide/#using-the-javascript-api)


## License

MIT [Alexander Milevski](http://w8r.name)

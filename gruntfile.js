'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		buble: {
			compile: {
				options: {
					sourceMap: true
				},
				files: {
					'test/tmp/fixture-compiled.js': 'test/fixtures/fixture.js'
				}
			}
		},
		nodeunit: {
			tasks: ['test/test.js']
		},
		clean: {
			test: ['test/tmp/**']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', ['clean', 'buble', 'nodeunit', 'clean']);
};

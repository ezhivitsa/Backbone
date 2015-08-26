module.exports = function(grunt) {

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					name: 'main',
					include: ['config'],
					baseUrl: 'dev/js',
					mainConfigFile: 'dev/js/config.js',
					out: 'dev/script/optimized.js',
					findNestedDependencies: true,
					optimize: 'none'
				}
			}
		},

		watch: {
			options: {
				spawn: false
			},
			scripts: {
				files: ['dev/js/**/*.js'],
				tasks: ['requirejs'],
				options: {
					spawn: false
				}
			}
		},

		connect: {
			options: {
				port: 4444,
				hostname: 'localhost'
			},
			dist: {
				options: {
					open: true,
					base: 'dev'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('build', ['requirejs']);
	grunt.registerTask('w', ['requirejs', 'connect', 'watch']);

};
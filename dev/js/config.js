requirejs.config({
	baseUrl: 'dev/js/',
	deps: ['main'],
	paths: {
		backbone: '../vendor/backbone-amd/backbone',
		underscore: '../vendor/underscore-amd/underscore',
		jquery: '../vendor/jquery/dist/jquery',
		bootstrap: '../vendor/bootstrap/dist/js/bootstrap.min'
	},

	shim: {
		bootstrap: {
			deps: ['jquery']
		}
	}
});
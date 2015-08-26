require([
	'jquery',

	'modules/form'
], 
	function ($, Form) {
		var $root = $('#app-root');

		var form = new Form();

		form.render($root);
	}
);
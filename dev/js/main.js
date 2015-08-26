require([
	'jquery',

	'modules/form',
	'modules/question'
], 
	function ($, FormView, QuestionView) {
		var $root = $('#app-root');

		var form = new FormView(),
			question = new QuestionView();

		form.render($root);
		question.render($root);
	}
);
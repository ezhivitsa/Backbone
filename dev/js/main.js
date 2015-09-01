require([
	'jquery',

	'modules/form',
	'modules/question',
	'modules/to-do-list',
	'modules/actions',

	'modules/collections/action'
], 
	function ($, FormView, QuestionView, ToDoListView, ActionsView, ActionsCollection) {
		'use strict';

		var $root = $('#app-root');

		var actionsCollection = new ActionsCollection();

		var form = new FormView(),
			question = new QuestionView(),
			toDoList = new ToDoListView(actionsCollection),
			actions = new ActionsView({ collection: actionsCollection });


		form.render($root);
		question.render($root);
		$root.append(toDoList.render().el);

		$root.append(actions.render().el);
	}
);
define([
	'backbone',

	'modules/form',
	'modules/question',
	'modules/to-do-list',
	'modules/actions',

	'modules/collections/action'
],
	function (Backbone, FormView, QuestionView, ToDoListView, ActionsView, ActionsCollection) {
		'use strict';

		var $root = $('#app-root');

		var actionsCollection = new ActionsCollection();

		return Backbone.Router.extend({
			routes: {
				''          : 'form',
				'form'      : 'form',
				'to-do-list': 'toDoList'
			},

			form: function () {
				var form = new FormView(),
					question = new QuestionView();

				$root
					.empty()
					.append(form.render().el)
					.append(form.render().el)
					.append(question.render().el)
			},

			toDoList: function () {
				var toDoList = new ToDoListView(actionsCollection),
					actions = new ActionsView({ collection: actionsCollection });
					
				$root
					.empty()
					.append(toDoList.render().el)
					.append(actions.render().el);
			}
		});
	}
);
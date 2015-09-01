define([
	'backbone',
	'underscore',

	'dataSource',

	'modules/models/action'
],
	function (Backbone, _, DataSource, ActionModel) {
		'use strict';

		return Backbone.View.extend({
			template: _.template(DataSource.getTemplate('to-do-list')),

			events: {
				'.btn click': 'addToList'
			},

			initialize: function (ActionsCollection) {
				this.actionsCollection = ActionsCollection;
			},

			render: function () {
				this.$el.append(this.template());
				return this;
			},

			addToList: function () {
				var actionText = this.$el.val(),
					action;

				if ( action ) {
					action = new ActionModel({
						action: actionText,
						isDone: false
					});

					actionsCollection.add(action);
				}
			}
		});
	}
);
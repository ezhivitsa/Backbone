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
				'click .btn': 'addToList'
			},

			initialize: function (ActionsCollection) {
				this.actionsCollection = ActionsCollection;
			},

			render: function () {
				this.$el.html(this.template());
				return this;
			},

			addToList: function () {
				var actionText = this.$el.find('.action').val(),
					action;

				if ( actionText ) {
					action = new ActionModel({
						action: actionText,
						isDone: false
					});

					this.actionsCollection.add(action);
				}
			}
		});
	}
);
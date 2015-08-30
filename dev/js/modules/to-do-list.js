define([
	'backbone',
	'underscore',

	'dataSource',

	'modules/models/action'
],
	function (Backbone, _, DataSource) {
		'use strict';

		var ActionView = Backbone.View.extend({
			template: _.template(DataSource.getTemplate('to-do-list')),

			events: {
				'.btn click': 'buttonClick'
			},

			render: function () {
				this.$el.append(this.template(this.model.toJSON()));
				return this;
			},

			buttonClick: function () {
				var action = this.$el.find('.action').val();
			}
		});

		return Backbone.View.extend({
			'tagName': 'ul',

			render: function () {
				this.collection.each(function(action){
					var actionView = new ActionView({ model: action });
					this.$el.append(actionView.render().el);
				}, this);

				return this;
			}
		});
	}
);
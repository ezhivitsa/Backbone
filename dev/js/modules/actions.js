define([
	'backbone',
	'underscore',

	'dataSource'
],
	function (Backbone, _, DataSource) {
		'use strict';

		var ActionView = Backbone.View.extend({
			template: _.template(DataSource.getTemplate('action')),

			events: {
				'click .remove': 'removeClick',
				'click .done': 'doneClick',
				'click .make-active': 'activeClick'
			},

			render: function () {
				this.$el.append(this.template(this.model.toJSON()));
				return this;
			},

			removeClick: function () {
				this.model.destroy();
			},

			doneClick: function () {
				this.model.set('isDone', true);
			},

			activeClick: function () {
				this.model.set('isDone', false);
			}
		});

		return Backbone.View.extend({
			'tagName': 'ul',

			initialize: function () {
				this.listenTo(this.collection, 'add', this.render);
				this.listenTo(this.collection, 'destroy', this.render);
				this.listenTo(this.collection, 'change', this.render);
			},

			render: function () {
				this.$el.empty();
				this.collection.each(function(action){
					var actionView = new ActionView({ model: action });
					this.$el.append(actionView.render().el);
				}, this);

				return this;
			}
		});
	}
);
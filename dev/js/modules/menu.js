define([
	'backbone',
	'underscore',

	'dataSource'
],
	function (Backbone, _, DataSource) {
		'use strict';

		return Backbone.View.extend({
			template: _.template(DataSource.getTemplate('menu')),

			render: function () {
				this.$el.html(this.template());
				return this;
			}
		});
	}
);
define([
	'app',
	'dataSource',

	'backbone',
	'underscore',
	'jquery',
	'bootstrap'
], 
	function (App, DataSource, Backbone, _, $) {
		return Backbone.View.extend({
			template: _.template(DataSource.getTemplate('modal-popup')),

			initialize: function () {
				var self = this;

				DataSource.on(':modal-question-show', function () {
					self.$el.find('#modal-question').modal('show');
				});	
			},

			render: function ($parent) {
				this.$el.html(this.template());
				return this;
			}
		});
	}
);
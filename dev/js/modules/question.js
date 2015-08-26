define([
	'app',
	'dataSource',

	'backbone',
	'underscore'
], 
	function (App, DataSource, Backbone, _) {
		return Backbone.View.extend({
			template: _.template(DataSource.getTemplate('modal-popup')),

			initialize: function () {
				DataSource.on(':modal-question-show', function () {
					console.log('hjghjbgh');
				});	
			},

			render: function ($parent) {
				this.$el.html(this.template());

				$parent.append(this.$el);
			}
		});
	}
);
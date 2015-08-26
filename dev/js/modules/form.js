define([
	'backbone',
	'underscore',
	'jquery'
],
	function (Backbone, _, $) {
		return Backbone.View.extend({
			templateUrl: 'templates/form.html',

			initialize: function () {
				var self = this;

				$.ajax({
					url: this.templateUrl,
					method: 'GET',
					async: false
				}).done(function (template) {
					self.template = _.template(template);
				});
			},

			events: {
				'click [type="submit"]': 'submitClick'
			},

			render: function ($parent) {
				this.$el.html(this.template());

				$parent.append(this.$el);
			},

			submitClick: function (e) {
				e.preventDefault();

				console.log('sss')
			}
		});
	}
);
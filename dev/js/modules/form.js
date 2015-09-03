define([
	'app',
	'dataSource',

	'backbone',
	'underscore'
],
	function (App, DataSource, Backbone, _) {
		return Backbone.View.extend({
			templateUrl: 'form',

			initialize: function () {
				this.template = _.template(DataSource.getTemplate(this.templateUrl));
			},

			events: {
				'click [type="submit"]': 'submitClick'
			},

			render: function () {
				this.$el.html(this.template());
				return this;
			},

			submitClick: function (e) {
				var $firstName = this.$el.find('#first-name'),
					$lastName = this.$el.find('#last-name');

				e.preventDefault();

				if ( $firstName.val() === App.author.firstName && $lastName.val() === App.author.lastName ) {
					DataSource.trigger(':modal-question-show');
				}
			}
		});
	}
);
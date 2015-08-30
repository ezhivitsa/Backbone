define([
	'backbone',

	'modules/models/action'
],
	function (Backbone, ActionModel) {
		return Backbone.Collection.extend({
			model: ActionModel
		});
	}
);
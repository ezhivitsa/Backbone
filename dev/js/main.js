require([
	'jquery',
	'backbone',

	'modules/menu',

	'router'
], 
	function ($, Backbone, MenuView, Router) {
		'use strict';

		var $menu = $('#menu');

		var menu = new MenuView(),
			router = new Router();

		$menu.append(menu.render().el);

		Backbone.history.start();
	}
);
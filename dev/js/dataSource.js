define([
	'app',

	'jquery'
],
	function (App, $) {
		var $root = $('#app-root'),
			root = $root.get(0),
			events = {};
		
		return {
			getTemplate: function (url) {
				var template = '';
				
				$.ajax({
					url: App.templates + url + '.html',
					method: 'GET',
					async: false
				}).done(function (data) {
					template = data;
				})

				return template;
			},

			on: function (eventName, callback) {
				if ( callback ) {
					if ( !events[eventName] ) {
						events[eventName] = [];

						root.addEventListener(eventName, function (e) {
							var i, len = events[eventName].length;
							for ( i = 0; i < len; i += 1 ) {
								events[eventName][i](e);
							}
						});
					}

					events[eventName].push(callback);
				}
			},

			off: function (eventName, callback) {
				var i, len;

				if ( callback ) {
					for ( i = 0, len = events[eventName].length; i < len; i += 1 ) {
						if ( events[eventName] === callback ) {
							events[eventName].splice(i, 1);
							break;
						}
					}
				}
				else {
					events[eventName] = [];
				}
			},

			trigger: function (eventName) {
				var event = new Event(eventName);
				root.dispatchEvent(event);
			}
		};
	}
);
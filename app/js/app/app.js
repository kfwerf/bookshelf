/*jslint devel: true, white: true */
(function() {
	'use strict';

	var appConfig = {
		template: {
			base: '/views/'
		},
		api: {
			img: '/img/',
			base: 'http://127.0.0.1:3000/api'
		}
	};


	angular.module('bookshelfApp', [ 'ui.router' ])
		.constant( 'CONFIG', appConfig );

}());
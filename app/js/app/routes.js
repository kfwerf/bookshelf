/*jslint devel: true, white: true */
(function() {
	'use strict';

	var appRoutes = function( $stateProvider, $urlRouterProvider, $locationProvider, $config ) {
		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise('/home/');

		$stateProvider
			.state('home', {
				url: '^/home/',
				templateUrl: $config.template.base + '/home.html'
			})
			.state('category', {
				url: '^/category/:type',
				templateUrl: $config.template.base + '/category.html'
			})
			.state('mybooks', {
				url: '^/my-books/',
				templateUrl: $config.template.base + '/mybooks.html'
			})
			.state('book-moreinfo', {
				url: '^/book/:isbn/',
				templateUrl: $config.template.base + '/book.html'
			});
	};


	angular.module('bookshelfApp')
		.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', 'CONFIG', appRoutes ]);

}());
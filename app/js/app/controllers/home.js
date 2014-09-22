/*jslint devel: true, white: true */
(function() {
	'use strict';

	var homeController = function( $scope, $http, $config ) {

		$http({ method: 'GET', url: $config.api.base + '/latest' })
			.success(function( objData ){
				$scope.books = objData;
			});

		
		

	};


	angular.module('bookshelfApp')
		.controller('home.controller', [ '$scope', '$http', 'CONFIG', homeController ] );
}());
/*jslint devel: true, white: true */
(function() {
	'use strict';

	var bookController = function( $stateParams, $scope, $http, $config ) {

		$http({ method: 'GET', url: $config.api.base + '/book/' + $stateParams.isbn })
			.success(function( objData ){
				$scope.book = objData;
			});
		
		

	};


	angular.module('bookshelfApp')
		.controller('book.controller', [ '$stateParams', '$scope', '$http', 'CONFIG', bookController ] );
}());
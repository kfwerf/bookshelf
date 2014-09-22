/*jslint devel: true, white: true */
(function() {
	'use strict';

	var categoryController = function( $stateParams, $scope, $http, $config ) {

		$http({ method: 'GET', url: $config.api.base + '/category/' + $stateParams.type })
			.success(function( objData ){
				$scope.books = objData;
			});
		$scope.objCategory = $scope.getCategoryBySlug($stateParams.type);
		
		

	};


	angular.module('bookshelfApp')
		.controller('category.controller', [ '$stateParams', '$scope', '$http', 'CONFIG', categoryController ] );
}());
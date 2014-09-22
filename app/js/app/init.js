/*jslint devel: true, white: true */
(function() {
	'use strict';

	var appInit = function( $http, $rootScope, $config ) {
	
		$rootScope.$config = $config;

		$http({ method: 'GET', url: $config.api.base + '/categories' })
			.success(function( objData ){
				$rootScope.categories = objData;
			});

		$rootScope.sessionId = 'ORDBMTWVNGGORJBWPMRUAQRMTAWEHOKD';

		$rootScope.objLoanedBooks = [];
		$rootScope.objReservedBooks = [];

		$rootScope.boolLogin = true;

		$rootScope.getCategoryBySlug = function( strSlug ) {
			var i = 0, objCategory = {};
			for ( i = 0; i < $rootScope.categories.length; i++ ) {
				objCategory = $rootScope.categories[i];

				if(objCategory['endpoint'] === strSlug) {
					break;
				}
			}
			return objCategory;
		};

	};


	angular.module('bookshelfApp')
		.run([ '$http', '$rootScope', 'CONFIG', appInit ]);

}());
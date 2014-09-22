/*jslint devel: true, white: true */
(function() {
	'use strict';

	var bookDirective = function( $rootScope, $config, $http ) {
		return {
			templateUrl: $config.template.base + '/directives/book.html',
			scope: {
				book: '='
			},
			controller: function( $scope, $location ) {

				$scope.boolReserveDisabled = false;
				$scope.boolLoanDisabled = false;

				$scope.getBackgroundUrl = function() {
					return $config.api.img + $scope.book.coverart;
				};

				$scope.getMoreInfo = function( numIsbn ) {
					$location.url('/book/' + numIsbn + '/');
				};

				$scope.doReserveBook = function( numIsbn ) {
					$http({
						method: 'POST',
						url: $config.api.base + '/book/' + $scope.book.isbn + '/reserve',
						data: {
							sessionId: $rootScope.sessionId
						}
					}).success(function( objData ) {
						if(objData.reserved) {
							alertify.success('Book succesfully reserved to you. You can pick it up at: ' + $scope.book.until);
							$scope.boolReserveDisabled = true;
							$rootScope.objReservedBooks.push($scope.book);
						} else {
							alertify.error('Book could not be reserved.');
						}
					});
				};

				$scope.doLoanBook = function( numIsbn ) {
					$http({
						method: 'POST',
						url: $config.api.base + '/book/' + $scope.book.isbn + '/loan',
						data: {
							sessionId: $rootScope.sessionId
						}
					}).success(function( objData ) {
						if(objData.loaned) {
							alertify.success('Book succesfully loaned to you. Look up the nearest pick up point. Return it before 21-11-2014.');
							$scope.boolLoanDisabled = true;
							$rootScope.objLoanedBooks.push($scope.book);
						} else {
							alertify.error('Book could not be loaned.');
						}
					});
				};

			}
		};
	};


	angular.module('bookshelfApp')
		.directive( 'bookItem', [ '$rootScope', 'CONFIG', '$http', bookDirective ] );

}());
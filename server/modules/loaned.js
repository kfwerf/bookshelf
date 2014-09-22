/*jslint devel: true, white: true */
(function() {
	'use strict';

	var objLatestLoanedData, getLoanedBooksByLatest, getLoanedBooksByPerson, getLoanedBooksByName;

	objLatestLoanedData = require('../data/latest.json');

	getLoanedBooksByLatest = function() {

		return objLatestLoanedData;

	};
	getLoanedBooksByPerson = function() {

	};
	getLoanedBooksByName = function() {

	};

	module.exports = {
		latest: getLoanedBooksByLatest,
		person: getLoanedBooksByPerson,
		name: getLoanedBooksByName
	};

}());
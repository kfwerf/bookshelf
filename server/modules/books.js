/*jslint devel: true, white: true */
(function() {
	'use strict';

	var objCategoryData, getBooksByCategory, objSingleBookData, getSingleBook, doReserveBook, doLoanBook;

	objCategoryData = {
		'action-thriller': require('../data/action-thriller.json')
	};

	objSingleBookData = require('../data/book.json');

	getBooksByCategory = function( strCategory ) {

		strCategory = 'action-thriller';

		return objCategoryData[strCategory];

	};

	getSingleBook = function( numIsbn ) {
		return objSingleBookData;
	};

	doReserveBook = function( numIsbn, numSession ) {
		// Do a lookup on the session to verify user and after that try to log it into the db
		return {
			sessionId: numSession,
			isbn: numIsbn,
			reserved: true
		};
	};

	doLoanBook = function( numIsbn, numSession ) {
		// Do a lookup on the session to verify user and after that try to log it into the db
		return {
			sessionId: numSession,
			isbn: numIsbn,
			loaned: true
		};
	};

	module.exports = {
		category: getBooksByCategory,
		single: getSingleBook,
		reserve: doReserveBook,
		loan: doLoanBook
	};

}());
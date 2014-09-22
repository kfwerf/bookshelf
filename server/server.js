/*jslint devel: true, white: true */
(function() {

	'use strict';

	var objExpress, objCors, objApp, objBodyParser, numPort, objRouter, objLoanedBooks, objCategories, objBooks;

	objExpress = require('express');
	objCors = require('cors');
	objBodyParser = require('body-parser');

	objLoanedBooks = require('./modules/loaned.js');
	objCategories = require('./modules/categories.js');
	objBooks = require('./modules/books.js');

	objApp = objExpress();
	numPort = process.env.PORT || 3000;
	objRouter = objExpress.Router();

	objApp.all('/*', function(objRequester, objResponder, objNext) {
		objResponder.header("Access-Control-Allow-Origin", "*");
		objResponder.header("Access-Control-Allow-Headers", "X-Requested-With, accept, content-type");
		objNext();
	});

	objRouter.get('/latest', function(objRequester, objResponder) {

		var objResponse = objLoanedBooks.latest();

		objResponder.json(objResponse);
	});

	objRouter.get('/category/:category', function(objRequester, objResponder) {

		var objResponse = objBooks.category( objRequester.params.category );

		objResponder.json(objResponse);
	});

	objRouter.get('/book/:isbn', function(objRequester, objResponder) {

		var objResponse = objBooks.single( objRequester.params.isbn );

		objResponder.json(objResponse);
	});

	objRouter.post('/book/:isbn/reserve', function(objRequester, objResponder) {
		var objResponse = objBooks.reserve( objRequester.params.isbn, objRequester.body.sessionId );

		objResponder.json(objResponse);
	});

	objRouter.post('/book/:isbn/loan', function(objRequester, objResponder) {
		var objResponse = objBooks.loan( objRequester.params.isbn, objRequester.body.sessionId );

		objResponder.json(objResponse);
	});

	objRouter.get('/categories', function(objRequester, objResponder) {

		var objResponse = objCategories.all();

		objResponder.json(objResponse);

	});

	
	objApp.use( objBodyParser.json() );
	objApp.use( objBodyParser.urlencoded() );
	objApp.use('/api', objRouter);
	objApp.use(objCors());

	objApp.listen(numPort);

	console.log( 'Api runs on port: ' + numPort );

}());
/*jslint devel: true, white: true */
(function() {
	'use strict';

	var objCategoriesData, getAllCategories;

	objCategoriesData = require('../data/categories.json');

	getAllCategories = function() {

		return objCategoriesData;

	};


	module.exports = {
		all: getAllCategories
	};

}());
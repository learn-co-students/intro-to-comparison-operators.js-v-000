'use strict';

function testFalseLooseEqualityComparison() {
	var zero = 0;
	var one = 1;
	return zero == one;
}

function testTrueLooseNonEqualityComparison() {
	var zero = 0;
	var one = 1;
	return zero != one;
}

function testTrueLooseEqualityComparison() {
	var intOne = 1;
	var strOne = "1";
	return intOne == strOne
}

function testFalseStrictEqualityComparison() {
	var intOne = 1;
	var strOne = "1";
	return intOne === strOne
}

function testTrueStrictEqualityComparison() {
	var intOne = 1;
	var strOne = "1";
	return intOne === parseInt(strOne)
}
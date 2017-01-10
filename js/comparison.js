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
	var one = 1;
	var onetext = "1";
	return one == onetext;
}
// will return true

function testFalseStrictEqualityComparison() {
	var one = 1;
	var onetext = "1";
	return one === onetext;
}
// will return false

function testTrueStrictEqualityComparison() {
	var one = 1;
	var onetext = "1";
	return one === parseInt(onetext);
}
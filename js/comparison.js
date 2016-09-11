'use strict';

function testFalseLooseEqualityComparison() {
	var one = 1;
	var zero = 0;
	return one == zero; 
}

function testTrueLooseNonEqualityComparison() {
	var zero = 0;
	var one = 1;
	return zero != one;
}

function testTrueLooseEqualityComparison() {
	var string = "1";
	var num = 1;
	return num == string;
} 

function testFalseStrictEqualityComparison() {
	var string = "1";
	var num = 1;
	return string === num;
}

function testTrueStrictEqualityComparison() {
	var string = "1";
	var num = 1;
	return num === parseInt(string)
}
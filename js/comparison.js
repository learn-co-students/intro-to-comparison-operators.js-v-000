'use strict';

function testFalseLooseEqualityComparison() {
	var var0 = 0;
	var var1 = 1;
	return var0 == var1;
}

function testTrueLooseNonEqualityComparison() {
	var var0 = 0;
	var var1 = 1;
	return var0 != var1;
}

function testTrueLooseEqualityComparison() {
	var var0 = 1;
	var var1 = "1";
	return var0 == var1;
}

function testFalseStrictEqualityComparison() {
	var var0 = 1;
	var var1 = "1";
	return var0 === var1;
}


function testTrueStrictEqualityComparison() {
	var var0 = 1;
	var var1 = "1";
	return var0 === parseInt(var1);
}

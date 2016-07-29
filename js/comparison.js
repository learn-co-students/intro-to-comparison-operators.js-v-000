'use strict';
function testFalseLooseEqualityComparison(){
	var var1 = 1;
	var var2 = 0;
	return var2 == var1;
}

function testTrueLooseNonEqualityComparison(){
	var var1 = 1;
	var var2 = 0;
	return var2 != var1;
}

function testTrueLooseEqualityComparison(){
	var var1 = 1;
	var var2 = "1";
	return var2 == var1;
}

function testFalseStrictEqualityComparison(){
	var var1 = 1;
	var var2 = "1";
	return var2 === var1;
}

function testTrueStrictEqualityComparison(){
	var var1 = 1;
	var var2 = "1";
	return parseInt(var2) === var1;
}
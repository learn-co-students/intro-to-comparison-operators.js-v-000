'use strict';

function testFalseLooseEqualityComparison() {
	const a = 0;
	const b = 1;
	return a == b;
}

function testTrueLooseNonEqualityComparison() {
	const a = 0;
	const b = 1;
	return a != b;
}

function testTrueLooseEqualityComparison() {
	const a = 1;
	const b = '1';
	return a == b;
}

function testFalseStrictEqualityComparison() {
	const a = 1;
	const b = '1';
	return a === b;
}

function testTrueStrictEqualityComparison() {
	const a = 1;
	const b = '1';
	return a !== b;
}

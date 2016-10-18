function testFalseLooseEqualityComparison() {
	var zero = 0;
	var one = 1;
	return zero == one;
}

function testTrueLooseNonEqualityComparison() {
	return 0 != 1;
}

function testTrueLooseEqualityComparison() {
	return 1 == "1";
}

function testFalseStrictEqualityComparison() {
	return 1 === "1";
}

function testTrueStrictEqualityComparison() {
	return 1 === parseInt("1");
}
'use strict';

function testFalseLooseEqualityComparison() {
  return 1 == 0;
}

function testTrueLooseNonEqualityComparison() {
  return 1 != 0;
}

function testTrueLooseEqualityComparison() {
  return 1 == "1";
}

function testFalseStrictEqualityComparison() {
  return 1 === '1';
}

function testTrueStrictEqualityComparison() {
  var one = '1';
  return 1 == one;
}

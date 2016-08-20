'use strict';

function testFalseLooseEqualityComparison() {
  var one = 1;
  var zero = 0;
  return one == zero
}

function testTrueLooseNonEqualityComparison() {
  var one = 1;
  var zero = 0;
  return one != zero
}

function testTrueLooseEqualityComparison() {
  var one = 1;
  var two = "1";
  return one == two
}

function testFalseStrictEqualityComparison() {
  var one = 1;
  var two = "1";
  return one === two
}

function testTrueStrictEqualityComparison() {
  var one = 1;
  var two = "1";
  return one === parseInt(two)
}

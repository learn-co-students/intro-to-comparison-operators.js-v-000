'use strict';

function testFalseLooseEqualityComparison() {
  var one = 1;
  var zero = 0;

  return one == zero;
}

function testTrueLooseNonEqualityComparison() {
  var one = 1;
  var zero = 0;

  return one != zero;
}

function testTrueLooseEqualityComparison() {
  var one = 1;
  var also = 1;

  return one == also;
}

function testFalseStrictEqualityComparison() {
  var one = 1;
  var also = "1";

  return one === also;
}

function testTrueStrictEqualityComparison() {
  var one = 1;
  var also = parseInt("1");

  return one === also;
}

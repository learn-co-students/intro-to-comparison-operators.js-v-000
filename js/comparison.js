'use strict';

function testFalseLooseEqualityComparison() {
  var one = 1;
  var zero = 0;
  return one == zero;
};

function testTrueLooseNonEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero != one;
};

function testTrueLooseEqualityComparison() {
  var a = 1;
  var b = "1";
  return a == b;
};

function testFalseStrictEqualityComparison() {
  var a = 1;
  var b = "1";
  return a === b;
};

function testTrueStrictEqualityComparison() {
  var a = 1;
  var b = "1";
  return a === parseInt(b);
}

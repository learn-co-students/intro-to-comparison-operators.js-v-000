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
  var number = 1;
  var string = "1";
  return number == string;
}

function testFalseStrictEqualityComparison() {
  var number = 1;
  var string = "1";
  return number === string;
}

function testTrueStrictEqualityComparison() {
  var number = 1;
  var string = "1";
  return number === parseInt(string);
}

'use strict';

function testFalseLooseEqualityComparison() {
  var zero = 0,
      one = 1;
  return zero == one;
}

function testTrueLooseNonEqualityComparison() {
  var zero = 0,
      one = 1;
  return zero != one;
}

function testTrueLooseEqualityComparison() {
  var integer = 1,
      string = "1";
  return integer == string;
}

function testFalseStrictEqualityComparison() {
  var integer = 1,
      string = "1";
  return integer === string;
}

function testTrueStrictEqualityComparison() {
  var integer = 1,
      string = "1";
  return integer === parseInt(string, 10);
}
'use strict';

function testFalseLooseEqualityComparison() {
  var zero = 0;
  var one  = 1;
  return zero == one;
}

function testTrueLooseNonEqualityComparison() {
  var zero = 0;
  var one  = 1;
  return zero != one;
}

function testTrueLooseEqualityComparison () {
  var num    = 1;
  var string = "1";
  return num == string;
}

function testFalseStrictEqualityComparison() {
  var num    = 1;
  var string = "1";
  return num === string;
}

function testTrueStrictEqualityComparison() {
  var num    = 1;
  var string = "1";
  return num === parseInt(string);
}
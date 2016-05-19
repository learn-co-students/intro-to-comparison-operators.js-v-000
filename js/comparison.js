'use strict';

function testFalseLooseEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero == one;
}

function testTrueLooseNonEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero != one;
}

var testTrueLooseEqualityComparison = function() {
  var oneInteger = 1;
  var oneString = "1";
  return oneInteger == oneString;
};

var testFalseStrictEqualityComparison = function() {
  var oneInteger = 1;
  var oneString = "1";
  return oneInteger === oneString;
};

function testTrueStrictEqualityComparison() {
  var oneInteger = 1;
  var oneString = "1";
  return oneInteger === parseInt(oneString);
}
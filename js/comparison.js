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

function testTrueLooseEqualityComparison() {
  var int = 1;
  var str = "1";
  return int == str;
}

function testFalseStrictEqualityComparison() {
  var int = 1;
  var str = "1";
  return int === str;
}

function testTrueStrictEqualityComparison() {
  var int = 1;
  var str = "1";
  return int === parseInt(str);
}

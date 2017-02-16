'use strict';

function testFalseLooseEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero == one
}

function testTrueLooseNonEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero != one
}

function testTrueLooseEqualityComparison() {
  var uno = 1;
  var one = 1;
  return uno == one
}

function testFalseStrictEqualityComparison() {
  var uno = "1";
  var one = 1;
  return uno === one
}

function testTrueStrictEqualityComparison() {
  var uno = "1";
  var one = 1;
  return parseInt(uno) === one
}
'use strict';

function testFalseLooseEqualityComparison() {
  var x = 0;
  var y = 1;
  return x == y;
}

function testTrueLooseNonEqualityComparison() {
  var a = 0;
  var b = 1;
  return a != b;
}

function testTrueLooseEqualityComparison() {
  var a = 1;
  var b = "1";
  return a == b;
}

function testFalseStrictEqualityComparison() {
  var a = 1;
  var b = "1";
  return a === b;
}

function testTrueStrictEqualityComparison() {
  var a = 1;
  var b = '1';
  return a === parseInt(b);
}
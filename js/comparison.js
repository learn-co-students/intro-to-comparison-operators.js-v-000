'use strict';

function testFalseLooseEqualityComparison() {
  var i = 0;
  var x = 1;
  return i == x;
}

function testTrueLooseNonEqualityComparison() {
  var i = 0;
  var x = 1;
  return i != x;
}

function testTrueLooseEqualityComparison() {
  var i = "1";
  var x = 1;
  return i == x;
}

function testFalseStrictEqualityComparison() {
  var i = "1";
  var x = 1;
  return i === x;
}

function testTrueStrictEqualityComparison() {
  var i = 1;
  var x = "1";
  return i === parseInt(x);
}

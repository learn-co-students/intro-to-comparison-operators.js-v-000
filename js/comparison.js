'use strict';

function testFalseLooseEqualityComparison() {
  var x = 0;
  var y = 2;
  return x == y;
}

function testTrueLooseNonEqualityComparison() {
  var x = 0;
  var y =2;
  return x != y;
}

function testTrueLooseEqualityComparison() {
  var y = 1;
  var x = "1";
  return  x == y;
}

function testFalseStrictEqualityComparison() {
  var y = 1
  var x = "1"
  return y === x;
}

function testTrueStrictEqualityComparison() {
var y = 1
var x = 1
return x ===y;
}

'use strict';
function  testFalseLooseEqualityComparison() {
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
  var c = "1";
  var d = 1;
  return c == d;
}

function testFalseStrictEqualityComparison() {
  var e = "1";
  var f = 1;
  return e === f;
}

function testTrueStrictEqualityComparison() {
  var g = 1;
  var h = parseInt("1");
  return g === h;
}

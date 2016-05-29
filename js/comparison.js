'use strict';

function testFalseLooseEqualityComparison() {
   var x = 0;
   var y = 1;
   return x == y;
}

function testTrueLooseNonEqualityComparison() {

  var m = 0;
  var l = 1;
  return m != l;
}

function testTrueLooseEqualityComparison() {
  var n = 1;
  var k = "1";
  return n == k;
}

function testFalseStrictEqualityComparison() {
  var u = 1;
  var t = "1";
  return u === t;
}

function testTrueStrictEqualityComparison() {
  var w = 1;
  var b = parseInt("1");
  return w === b;
}

'use strict';

function testFalseLooseEqualityComparison() {
  var x = 0;
  var y = 1;
  return x == y;
};

function testTrueLooseNonEqualityComparison() {
  var a = 0;
  var b = 1;
  return a != b;
};

function testTrueLooseEqualityComparison() {
  var c = 1;
  var d = "1";
  return c == d;
};

function testFalseStrictEqualityComparison() {
  var x = 1;
  var y = "1";
 return x === y;
};

function testTrueStrictEqualityComparison() {
  var x = 1;
  var y = "1";
  return x === parseInt(y);

}

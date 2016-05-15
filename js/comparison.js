'use strict';
function testFalseLooseEqualityComparison() {
  var int1 = 0;
  var int2 = 1;
  return int1 == int2;
}

function testTrueLooseNonEqualityComparison() {
  var int1 = 0;
  var int2 = 1;
  return int1 != int2;
}

function testTrueLooseEqualityComparison() {
  var int1 = "1";
  var int2 = 1;
  return int1 == int2;
}

function testFalseStrictEqualityComparison() {
  var int1 = 1
  var int2 = "1"
  return int1 === int2;
}

function testTrueStrictEqualityComparison() {
  var int1 = 1
  var int2 = "1"
  return int1 === parseInt(int2)
}

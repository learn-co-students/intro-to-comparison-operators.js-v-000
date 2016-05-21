'use strict';
function testFalseLooseEqualityComparison() {
  var a = 0;
  var b = 1;
  return 0 == 1;
}

function testTrueLooseNonEqualityComparison() {
  var a = 0;
  var b = 1;
  return 0 != 1;
}

function testTrueLooseEqualityComparison() {
  var a = 1;
  var b = "1";
  return 1 == "1";
}

function testFalseStrictEqualityComparison() {
  var a = 1;
  var b = "1";
  return 1 === "1";
}

function testTrueStrictEqualityComparison() {
  var a = 1;
  var b = "1";
  return 1 == parseInt("1");
}

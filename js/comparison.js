'use strict';
function testFalseLooseEqualityComparison() {
  var num1 = 0;
  var num2 = 1;
  return num1 == num2
}

function testTrueLooseNonEqualityComparison() {
  var storing1 = 0;
  var storing2 = 1;
  return storing1 != storing2;
}

function testTrueLooseEqualityComparison() {
  var test1 = 1;
  var test2 = "1";
  return test1 == test2;
}

function testFalseStrictEqualityComparison() {
  var num3 = 1;
  var num4 = "1";
  return num3 === num4;
}

function testTrueStrictEqualityComparison() {
  var test3 = 1;
  var test4 = parseInt("1");
  return test3 === test4;
}

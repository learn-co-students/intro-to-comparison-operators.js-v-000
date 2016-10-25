'use strict';

function testFalseLooseEqualityComparison() {
  var num0 = 0;
  var num1 = 1;
  return num0 == num1;
}

function testTrueLooseNonEqualityComparison() {
  var num0 = 0;
  var num1 = 1;
  return num0 != num1;
}

function testTrueLooseEqualityComparison() {
  var string1 = "1";
  var num1 = 1;
  return string1 == num1;
}

function testFalseStrictEqualityComparison() {
  var num1 = 1;
  var string1 = "1";
  return num1 === string1;
}

function testTrueStrictEqualityComparison() {
  var num1 = 1;
  var string1 = "1";
  return num1 === parseInt(string1);
}

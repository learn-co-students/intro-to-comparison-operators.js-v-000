'use strict';

function testFalseLooseEqualityComparison() {
  var num1 = 0;
  var num2 = 1;
  return num1 == num2;
}

function testTrueLooseNonEqualityComparison() {
  var num1 = 0;
  var num2 = 1;
  return num1 != num2;
}

function testTrueLooseEqualityComparison() {
  var num1 = 1;
  var string1 = "1";
  return num1 == string1;
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
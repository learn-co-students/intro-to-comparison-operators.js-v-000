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
  var num = 1;
  var string = "1";
  return num == string;
}

function testFalseStrictEqualityComparison() {
  var num = 1;
  var string = "1";
  return num === string;
}

function testTrueStrictEqualityComparison() {
  var num = 1;
  var string = "1";
  return num === parseInt(string);
}

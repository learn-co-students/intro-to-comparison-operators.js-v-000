'use strict';

function testFalseLooseEqualityComparison() {
  var first = 1;
  var second = 2;
  return first == second;
}

function testTrueLooseNonEqualityComparison() {
  var first = 1;
  var second = 2;
  return first != second;
}

function testTrueLooseEqualityComparison() {
  var num = 1;
  var str = "1";
  return num == str;
}

function testFalseStrictEqualityComparison() {
  var num = 1;
  var str = "1";
  return num === str;
}

function testTrueStrictEqualityComparison() {
  var num = 1;
  var str = "1";
  return num === parseInt(str);
}

'use strict';

function testFalseLooseEqualityComparison() {
  var firstValue = 0;
  var secondValue = 1;
  return firstValue == secondValue;
}

function testTrueLooseNonEqualityComparison() {
  var firstValue = 0;
  var secondValue = 1;
  return firstValue != secondValue;
}

function testTrueLooseEqualityComparison() {
  var firstValue = "1";
  var secondValue = 1;
  return firstValue == secondValue;
}

function testFalseStrictEqualityComparison() {
  var firstValue = "1";
  var secondValue = 1;
  return firstValue === secondValue;
}

function testTrueStrictEqualityComparison() {
  var firstValue = "1";
  var secondValue = 1;
  return secondValue === parseInt(firstValue);
}

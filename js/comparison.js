'use strict';

function testFalseLooseEqualityComparison() {
  var numberOne = 0;
  var numberTwo = 1;

  return numberOne == numberTwo;
}

function testTrueLooseNonEqualityComparison() {
  var numberOne = 0;
  var numberTwo = 1;

  return numberOne != numberTwo;
}

function testTrueLooseEqualityComparison() {
  var numberOne = 1;
  var numberTwo = 1;

  return numberOne == numberTwo;
}

function testFalseStrictEqualityComparison() {
  var numberOne = 1;
  var numberTwo = "1";

  return numberOne === numberTwo;
}

function testTrueStrictEqualityComparison() {
  var numberOne = 1;
  var numberTwo = parseInt("1");

  return numberOne === numberTwo;
}

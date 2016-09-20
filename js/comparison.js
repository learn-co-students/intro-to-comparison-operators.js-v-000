'use strict';

function testFalseLooseEqualityComparison() {
  var zeroVariable = 0;
  var oneVariable = 1;
  return zeroVariable == oneVariable;
}

function testTrueLooseNonEqualityComparison() {
  var zeroVariable = 0;
  var oneVariable = 1;
  return zeroVariable != oneVariable;
}

function testTrueLooseEqualityComparison() {
  var numberVariable = 1;
  var stringVariable = '1';
  return numberVariable == stringVariable;
}

function testFalseStrictEqualityComparison() {
  var numberVariable = 1;
  var stringVariable = '1';
  return numberVariable === stringVariable;
}

function testTrueStrictEqualityComparison() {
  var numberVariable = 1;
  var stringVariable = '1';
  return numberVariable === parseInt(stringVariable);
}
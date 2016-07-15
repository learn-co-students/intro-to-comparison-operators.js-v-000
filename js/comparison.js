'use strict';
function testFalseLooseEqualityComparison() {
  var intZero = 0
  var intOne = 1
  return intZero == intOne
}

function testTrueLooseNonEqualityComparison() {
  var intZero = 0
  var intOne = 1
  return intZero != intOne
}

function testTrueLooseEqualityComparison() {
  var stringOne = "1"
  var intOne = 1
  return stringOne == intOne
}

function testFalseStrictEqualityComparison() {
  var stringOne = "1"
  var intOne = 1
  return stringOne === intOne
}

function testTrueStrictEqualityComparison() {
  var stringOne = "1"
  var intOne = 1
  return parseInt(stringOne) === intOne
}

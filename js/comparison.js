'use strict';

function testFalseLooseEqualityComparison() {
  var apple = 0
  var orange = 1
  return apple == orange
}

function testTrueLooseNonEqualityComparison() {
  var pear = 0
  var strawberry = 1
  return pear != strawberry
}

function testTrueLooseEqualityComparison() {
  var blueberry = 1
  var grapefruit = "1"
  return blueberry == grapefruit
}

function testFalseStrictEqualityComparison() {
  var blueberry = 1
  var grapefruit = "1"
  return blueberry === grapefruit
}

function testTrueStrictEqualityComparison() {
  var blueberry = 1
  var grapefruit = "1"
  return blueberry === parseInt(grapefruit)
}

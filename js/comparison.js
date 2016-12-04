'use strict';

function testFalseLooseEqualityComparison() {
  var zero = "0"
  var one = "1"
  return zero == one
}

function testTrueLooseNonEqualityComparison() {
  var zero = "0"
  var one = "1"
  return zero != one
}

function testTrueLooseEqualityComparison() {
  var string = "1"
  var integer = 1
  return string == integer
}

function testFalseStrictEqualityComparison() {
  var string = "1"
  var integer = 1
  return string === integer
}

function testTrueStrictEqualityComparison() {
  var string = "1"
  var integer = 1
  return parseInt(string) === integer
}

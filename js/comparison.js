'use strict';

function testFalseLooseEqualityComparison() {
  var test = (1 == 0) ? true : false;
  return test;
}

function testTrueLooseNonEqualityComparison() {
  var test = (1 != 0) ? true : false;
  return test;
}

function testTrueLooseEqualityComparison() {
  var test = ("1" == 1) ? true : false;
  return test;
}

function testFalseStrictEqualityComparison() {
  var test = (1 === "1") ? true : false;
  return test;

}

function testTrueStrictEqualityComparison() {
  var test = (1 === parseInt("1")) ? true : false;
  return test;

}

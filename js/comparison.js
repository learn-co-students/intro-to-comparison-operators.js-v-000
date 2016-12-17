'use strict';

function testFalseLooseEqualityComparison() {
  var one = 1;
  var zero = 0;
  return one == zero;
}

function testTrueLooseNonEqualityComparison() {
  var one = 1;
  var zero = 0;
  return one != zero;
}

function testTrueLooseEqualityComparison() {
  var one = "1";
  var onenumber = 1;
  return one == onenumber;
}

function testFalseStrictEqualityComparison() {
  var one = "1";
  var onenumber = 1;
  return one === onenumber;
}

function testTrueStrictEqualityComparison() {
  var one = "1";
  var onenumber = 1;
  return parseInt(one) === onenumber;  
}